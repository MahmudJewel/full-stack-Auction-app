# Questions => Full Stack Test:
Make a bidding website using “django rest framework” where multiple users can list their items.
Tasks:
* Create API Endpoints for user login and registration
* Create- “Create, List, Details, Update, Bid” API endpoints for products
* A bid has an ending time, the highest bidder at the moment of closure wins the bid
* Make a frontend for using react or vue (feel free to use nuxt or next) with at least two pages (products and profile). You can use modals/dialogs for login, registration, etc.
* The profile page will show the user&#39;s biddings, which bid he/she won, lost,or is currently active as well as his/her listing (through API)
* The profile page should contain how much a user spent, or earned through biddings (through API)
* You must display the list of the top 5 users with the highest bidding amounts (win/loss) on the
logged-in user’s items (through API)
We would love to see your imagination in UI. This is an open book exam, feel free to browse the
internet, and ask on StackOverflow (share a link of your question if any)

## Tech stack I used
#### Back-end:
	Django Rest Framework (3.14.0)
#### Front-end
	React

#### Other Libraries
	django-cors-headers (3.14.0)
	djangorestframework-simplejwt (5.2.2)
	PyJWT (2.6.0)

# Setup
The first thing to do is to clone the repository:
```sh
$ git clone https://github.com/MahmudJewel/full-stack-Auction-app.git
```
### Back-end
Create a virtual environment to install dependencies in and activate it:
```sh
$ cd full-stack-Auction-app
$ python -m venv venv
$ source venv/bin/activate
```
Then install the dependencies:
```sh
(venv)$ pip install -r requirements.txt
```
Note the `(venv)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `virtualenv2`.

Once `pip` has finished downloading the dependencies:
```sh
(venv)$ python manage.py migrate
(venv)$ python manage.py runserver 8000
```
### Front-end
```sh
$ cd Frontend
$ npm install
$ npm start
```


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

# Some Screenshot
### Home Page

![1-home](https://user-images.githubusercontent.com/35461355/230955551-dceb329d-9055-4f52-9753-173aefaba649.png)

### Details Page

![2-detail page](https://user-images.githubusercontent.com/35461355/230955657-02690695-5564-4bec-88e7-b5ea9630f9c2.png)


### Details with Loging Warning

![3-details with loging warning](https://user-images.githubusercontent.com/35461355/230955719-1a35bb33-1fd8-4a8a-8ec4-fba1fa50dec6.png)

### Details with Price Warning

![4-details price warning](https://user-images.githubusercontent.com/35461355/230955737-3d0c875e-b675-4be9-973c-d58acd1a9045.png)

### Price Updated

![5-price updated](https://user-images.githubusercontent.com/35461355/230955777-f99bef99-cd43-4f48-85fb-880b0f24294e.png)

### Signup Page

![6-signup](https://user-images.githubusercontent.com/35461355/230956249-be58be10-7247-43d7-917c-b8ac48f19942.png)

### Signup Warning

![7-signup warning](https://user-images.githubusercontent.com/35461355/230956540-a8c8ebe0-b9a5-4aa1-9ab3-d56577ebdd7e.png)

### Loging Page

![8-login](https://user-images.githubusercontent.com/35461355/230957119-55989ea2-e46e-4352-8b43-d958d5be9714.png)

### Loging Warning Page

![9-login warning](https://user-images.githubusercontent.com/35461355/230957303-2f9f0a4b-da81-4b87-aae5-766eab1050f1.png)

# Happy Coding
## Juwel Mahmud

