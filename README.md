
# GAMES-WORLD

This is a WEB application using Angular for the front-end app for game lovers.
Used a Softuni Rest-api server for back-end with modification (in mongoose Models and Controllers) and MongoDB for storing data.

## Instalation and review:
1. Clone the repository: https://github.com/mtd94/
2. Navigate to server folder:
   - npm install - command for install all packeges dependances;
   - npm start - command for install allcommand to start the back-en server;
3. Navigate to games-world folder:
   - npm install - command for install all install all packeges dependances;
   - Run client Angular app - 
         ng serve


## Site overview 
### Navigation
 - NON logged in user
  ![image](https://iili.io/JNWWDiX.png)


image.png
 - logged in user 
 image.png
![image](https://iili.io/JNWhlC7.png)

### Footer
![image](https://iili.io/JNWhsnI.png)


### Home page
Public page for all users.

![image](https://iili.io/JNWjHt2.png)



### Login page

The login form expects as input: email and password.
Valid credentials in this case are:
 -	Email address must have at least 5 symbols. The valid domain name - "bg" or "com".
 -	Password should be at least 5 symbols as well

   ![image](https://iili.io/JNWhtFn.png)


### Register page

The register form expects as input: first name,last name,username, email, password and repeat password.
Valid inputs in this case are:
    First name should be at least 3 characters.
    Last name should be at least 3 characters.
 - 	Username should be at least 5 symbols as well.
 - 	Email address must have at least 5 symbols. The valid domain name - "bg" or "com".
 - 	Password should be at least 5 symbols as well
 -	Repeat password and password must be matched.

   ![image](https://iili.io/JNWhp9f.png)


### DEMO USERS
  - ivanov@abv.bg       pass: 101010,
  - robert@abv.bg       pass: 101010;
  - andrey@gmail.com    pass: 123456
  
  ### Game catalog page
  Public page for all users.

  ![image](https://iili.io/JNWhSaa.png)

Logged users can access the button details.

![image](https://iili.io/JNWhgyv.png)

### Create a new game
Page only for logged in users.
Every logged in user can create a new game in catalog.

The new game form expects as input: name, image url, description, year,genre
Valid data in this case is:
 -	Game name - should be at least 3 characters.
 - image url - should be a start with http or https.
 - description - should be a least min 5 characters.
 - genre - should be a least min 3 characters.

![image](https://iili.io/JNWhT2s.png)


### Profile page
Page only for logged in users
Profile page contains:
 -  personal account information for user 
 - created games

![image](https://iili.io/JNWhb8G.png)

![image](https://iili.io/JNUrqH7.png)



### Search page
 Public Page for all users.
Search game - case insensitive.

![image](https://iili.io/JNWhyu4.png)

![image](https://iili.io/JNWj9wl.png)


### Game details page
Private page - only for logged in users:
   - Loggin user see all information, without buttons edit and delete.
   - If the user is owner of games, it sees edit and delete buttons.

![image](https://iili.io/JNWhLGt.png)

![image](https://iili.io/JNWhPZN.png)


#### Game details - edit game

![image](https://iili.io/JNWh4uR.png)


#### Game details - delete game

![image](https://iili.io/JNWhG3u.png)

