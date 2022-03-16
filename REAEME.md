## database init

for linux
```
export FLASK_APP=twittor
flask db init
flask db migrate -m "enter your commit message here"
flask db upgrade
```

for windows
```
set FLASK_APP=twittor
flask db init
flask db migrate -m "enter your commit message here"
flask db upgrade
```