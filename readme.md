# Developed API
### Login & verify user
| SRL | METHOD | ROUTE | FUNCTIONALITY |ACCESS|
| ------- | ------- | ----- | ------------- | ------------- |
| *1* | *POST* | ```/api/token/``` | _Login user_| _All users_|
| *2* | *POST* | ```/api/token/refresh/``` | _Refresh the access token_|_All users_|
| *3* | *POST* | ```/api/token/verify/``` | _Verify the validity of a token_|_All users_|

### User Related API 
| SRL | METHOD | ROUTE | FUNCTIONALITY |ACCESS|
| ------- | ------- | ----- | ------------- | ------------- |
| *4* | *POST* | ```/api/auth/user/``` | _Register new user_|_Allow any_|
| *5* | *GET* | ```/api/auth/user/``` | _List all user_|_Adminuser_|
| *6* | *PUT* | ```/api/auth/user/uid/``` | _Update user_|_Adminuser_|
| *7* | *DELETE* | ```/api/auth/user/uid/``` | _Delete user_|_Adminuser_|

