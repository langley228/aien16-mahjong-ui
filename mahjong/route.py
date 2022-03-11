from flask import render_template, redirect, url_for, request, abort, current_app, flash, jsonify, session
from flask_login import login_user, current_user, logout_user, login_required

from mahjong.forms import LoginForm, RegisterFrom, EditProfileForm, TweetForm, DeleteTweetForm, \
    ResetPasswordRequestForm, PasswordResetForm, GoogleLoginForm
from mahjong.models.user import User, load_user
from mahjong.models.tweet import Tweet
from mahjong import db, oauth
from mahjong.email import send_email

@login_required
def index():
    tweetsCount = current_user.own_and_followed_tweets().count()
    form = TweetForm()
    if form.validate_on_submit():
        t = Tweet(body=form.tweet.data, author=current_user)
        db.session.add(t)
        db.session.commit()
        return redirect(url_for('index'))
    page_num = int(request.args.get('page') or 1)
    tweets = current_user.own_and_followed_tweets().paginate(page=page_num, per_page=current_app.config['TWEET_PER_PAGE'], error_out=False)

    next_url = url_for('index', page=tweets.next_num) if tweets.has_next else None
    prev_url = url_for('index', page=tweets.prev_num) if tweets.has_prev else None
    return render_template(
        'index.html', tweets=tweets.items, form=form, next_url=next_url, prev_url=prev_url, tweetsCount=tweetsCount
    )

@login_required
def delete(id):
    tweet_to_deleted = Tweet.query.get(id)
    db.session.delete(tweet_to_deleted)
    db.session.commit()
    return redirect(url_for('index'))

@login_required
def countTweets():
    tweetsCount = current_user.own_and_followed_tweets().count()
    return jsonify('', render_template('tweetsCounts.html', tweetsCount=tweetsCount))

def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    form = LoginForm(meta={'csrf': False})
    if form.validate_on_submit():
        u = User.query.filter_by(username=form.username.data).first()
        if u is None or not u.check_password(form.password.data):
            flash('invalid username or password')
            return redirect(url_for('login'))
        login_user(u, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if next_page:
            return redirect(next_page)
        return redirect(url_for('index'))

    google_login_form = GoogleLoginForm()
    if google_login_form.validate_on_submit():
        google = oauth.create_client('google')  # create the google oauth client
        redirect_uri = url_for('google_authorize', _external=True)
        return google.authorize_redirect(redirect_uri)

    return render_template('login.html', title="Login", form=form, google_login_form=google_login_form
    )

def logout():
    for key in list(session.keys()):
        session.pop(key)
    session.pop("userinfo", None)
    logout_user()
    return redirect(url_for('login'))

def google_authorize():
    google = oauth.create_client('google')  # create the google oauth client
    google.authorize_access_token()  # Access token from google (needed to get user info)
    # resp = google.get('userinfo')  # userinfo contains stuff u specificed in the scrope
    # user_info = resp.json()
    session["userinfo"] = oauth.google.userinfo()  # uses openid endpoint to fetch user info

    # Here you use the profile/user data that you got and query your database find/register the user
    # and set ur own data in the session not the profile from google
    if "userinfo" in session:
        userinfo = session["userinfo"]
        user = User.query.filter_by(email=userinfo['email']).first()
        if user is None:
            user = User(username=userinfo['name'], email=userinfo['email'])
            db.session.add(user)
            db.session.commit()
            login_user(user)
        login_user(user)
    session.permanent = False  # make the session permanant so it keeps existing after broweser gets closed
    return redirect('/')

def register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegisterFrom()
    if form.validate_on_submit():
        user = User(username=form.username.data, email = form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html', title='Registration', form=form)


@login_required
def user(username):
    u = User.query.filter_by(username=username).first()
    if u is None:
        abort(404)
    
    page_num = int(request.args.get('page') or 1)
    tweets = u.tweets.order_by(Tweet.create_time.desc()).paginate(
        page=page_num,
        per_page=current_app.config['TWEET_PER_PAGE'],
        error_out=False)

    delete_tweet_form = DeleteTweetForm()
    if delete_tweet_form.validate_on_submit():
        id = request.values['tweet_id']
        tweet_to_deleted = Tweet.query.get(id)
        db.session.delete(tweet_to_deleted)
        db.session.commit()
        return redirect(url_for('profile', username = current_user.username))

    next_url = url_for(
        'profile',
        username=username,
        page=tweets.next_num) if tweets.has_next else None
    prev_url = url_for(
        'profile',
        username=username,
        page=tweets.prev_num) if tweets.has_prev else None
    
    if request.method == 'POST':
        if request.form['request_button'] == 'Follow':
            current_user.follow(u)
            db.session.commit()
        elif request.form['request_button'] == 'Unfollow':
            current_user.unfollow(u)
            db.session.commit()
        else:
            flash("We've send an email to your email address, please check.")
            send_email_for_user_activate(current_user)
    return render_template(
        'user.html',
        title='Profile',
        tweets=tweets.items,
        user=u,
        next_url=next_url,
        prev_url=prev_url,
        delete_tweet_form=delete_tweet_form
    )

def send_email_for_user_activate(user):
    token = user.get_jwt()
    url_user_activate = url_for(
        'user_activate',
        token=token,
        _external=True
    )
    send_email(
        subject=current_app.config['MAIN_SUBJECT_USER_ACTIVATE'],
        recipients=[user.email],
        text_body= render_template(
            'email/user_activate.txt',
            username=user.username,
            url_user_activate=url_user_activate
        ),
        html_body=render_template(
            'email/user_activate.html',
            username=user.username,
            url_user_activate=url_user_activate
        )
    )

def user_activate(token):
    if current_user.is_activated:
        return redirect(url_for('index'))
    user = User.verify_jwt(token)
    if not user:
        msg = "Token has expired, please try to re-send email"
    else:
        user.is_activated = True
        db.session.commit()
        msg = 'User has been activated!'
    return render_template(
        'user_activate.html', msg=msg
    )

def page_not_found(e):
    return render_template('404.html'), 404

@login_required
def edit_profile():
    form = EditProfileForm()
    if request.method == 'GET':
        form.about_me.data = current_user.about_me
        form.email.data = current_user.email
    if form.validate_on_submit():
        current_user.about_me = form.about_me.data
        current_user.email = form.email.data
        db.session.commit()
        return redirect(url_for('profile', username = current_user.username))
    return render_template('edit_profile.html', title='Profile Editer', form=form)

def reset_password_request():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = ResetPasswordRequestForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user:
            flash(
                "You should soon receive an email allowing you to reset your \
                password. Please make sure to check your spam and trash \
                if you can't find the eamil."
            )
            token = user.get_jwt()
            url_password_reset = url_for(
                'password_reset',
                token=token,
                _external=True
            )
            url_reset_password_request = url_for(
                'reset_password_request',
                _external=True
            )
            send_email(
                subject=current_app.config['MAIL_SUBJECT_RESET_PASSWORD'],
                recipients=[user.email],
                text_body= render_template(
                    'email/passwd_reset.txt',
                    url_password_reset=url_password_reset,
                    url_reset_password_request=url_reset_password_request
                ),
                html_body=render_template(
                    'email/passwd_reset.html',
                    url_password_reset=url_password_reset,
                    url_reset_password_request=url_reset_password_request
                )
            )
        return redirect(url_for('login'))
    return render_template('reset_password_request.html', form=form)

def password_reset(token):
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    user = User.verify_jwt(token)
    if not user:
        print('verify failed')
        return redirect(url_for('login'))
    form = PasswordResetForm()
    if form.validate_on_submit():
        user.set_password(form.password.data)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template(
        'password_reset.html', title='Password Reset', form=form
    )

@login_required
def explore():
    # get all user and sort by followers
    page_num = int(request.args.get('page') or 1)
    tweets = Tweet.query.order_by(Tweet.create_time.desc()).paginate(
        page = page_num, per_page = current_app.config['TWEET_PER_PAGE'], error_out=False
    )

    delete_tweet_form = DeleteTweetForm()
    if delete_tweet_form.validate_on_submit():
        id = request.values['tweet_id']
        tweet_to_deleted = Tweet.query.get(id)
        db.session.delete(tweet_to_deleted)
        db.session.commit()
        return redirect(url_for('explore'))

    next_url = url_for('explore', page=tweets.next_num) if tweets.has_next else None
    prev_url = url_for('explore', page=tweets.prev_num) if tweets.has_prev else None
    return render_template(
        'explore.html', title='Explore', tweets=tweets.items
        , next_url=next_url, prev_url=prev_url, delete_tweet_form=delete_tweet_form\
        , test = current_user.username
    )