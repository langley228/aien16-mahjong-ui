## Database deploy

### set flask app to environment
open a terminal at your project path
- for linux
```
export FLASK_APP=mahjong
```
- for windows
```
set FLASK_APP=mahjong
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