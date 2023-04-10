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
| *6* | *GET* | ```/api/auth/user/uid/``` | _User details_|_IsOwnerOrAdmin_|
| *7* | *PUT* | ```/api/auth/user/uid/``` | _Update user_|_IsOwnerOrAdmin_|
| *8* | *DELETE* | ```/api/auth/user/uid/``` | _Delete user_|_IsOwnerOrAdmin_|

### Product Related API
| SRL | METHOD | ROUTE | FUNCTIONALITY |ACCESS|
| ------- | ------- | ----- | ------------- | ------------- |
| *9* | *GET* | ```/api/product/``` | _List all product_|_Allow any_|
| *10* | *GET* | ```/api/product/pid/``` | _Single product details_|_Allow any_|
| *11* | *POST* | ```/api/product/``` | _Create new product_|_Admin_|
| *12* | *PUT* | ```/api/product/uid/``` | _Update product_|_Admin_|
| *13* | *DELETE* | ```/api/product/uid/``` | _Delete product_|_Admin_|


### Bid Related API
| SRL | METHOD | ROUTE | FUNCTIONALITY |ACCESS|
| ------- | ------- | ----- | ------------- | ------------- |
| *14* | *GET* | ```/api/auction/``` | _List all bid_|_Allow any_|
| *15* | *GET* | ```/api/bids/uid/``` | _List indivisual user’s bid_|_Allow any_|
| *16* | *POST* | ```/api/auction/``` | _Create new bid_|_Authenticated_|
| *17* | *PUT* | ```/api/auction/uid/``` | _Update bid_|_Authenticated_|
| *18* | *DELETE* | ```/api/auction/uid/``` | _Delete bid_|_Authenticated_|
