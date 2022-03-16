## database init

### set flask app to environment
- for linux
```
export FLASK_APP=twittor
```
- for windows
```
set FLASK_APP=twittor
```

### database init
```
flask db init
```
### after you change your database setting
```
flask db migrate -m "enter your commit message here"
flask db upgrade
```