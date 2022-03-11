from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, EqualTo, ValidationError, Length

from mahjong.models.user import User

class LoginForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired()])
    password = PasswordField("Password", validators=[DataRequired()])
    remember_me = BooleanField("Remember me")
    submit = SubmitField("Sign in")

class RegisterFrom(FlaskForm):
    username = StringField("Username", validators=[DataRequired()])
    email = StringField("Email Address", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired()])
    password2 = PasswordField(
        "Password Repeat", validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField("Register")

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user is not None:
            raise ValidationError('Please use another username')

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError('Please use another email address')

class EditProfileForm(FlaskForm):
    about_me = TextAreaField("About me", validators=[Length(min=0, max=120)])
    email = TextAreaField("Email", validators=[Email()])
    submit = SubmitField("Save")

class TweetForm(FlaskForm):
    tweet = TextAreaField("Tweet", validators=[DataRequired(), Length(min=1, max=140)])
    submit = SubmitField("Tweet")

class DeleteTweetForm(FlaskForm):
    delete_tweet_button = SubmitField("DeleteTweet")

class GoogleLoginForm(FlaskForm):
    submit = SubmitField("GoogleLogin")

class ResetPasswordRequestForm(FlaskForm):
    email = StringField("Email Address", validators=[DataRequired(), Email()])
    submit = SubmitField('Reset Password')

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if not user:
            raise ValidationError('You do not have an account for this email address')

class PasswordResetForm(FlaskForm):
    password = PasswordField("Password", validators=[DataRequired()])
    password2 = PasswordField("Repeat Password", validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Submit')