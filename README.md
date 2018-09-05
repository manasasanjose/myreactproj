# myreactproj
```
Technologies used
Front end:REACTJS
Backend:PHP,MYSQL,SQL.
Database:phpMyadmin
I have installed the xampp server and used it for the execution of my project.
I have used npm to run the react part.
Used PHP to implement the CRUD operations to the database.
UI makes  rest api calls using "axios" framework to the php files to perfrom the CRUD operations on the database.
I chose php as the backend resource as i have had programming experience with the language and i am comforatable in coding with it.
```
```
This application consists of two users
```
```
1.user
2.admin

The user will only be able to view a hello world page
the admin will be able to view hello admin and also perform CRUD operations on the user table.

Initial setup
Create datbase "react" with "users" table.
CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(32) NOT NULL,
  `name` varchar(32) ,
  `age` int(11),
  `password` varchar(32),
  `type`varchar(2),
  PRIMARY KEY (`id`)
)  ;

Admin username: manasa565@gmail.com
Admin password: manasa

Sample user username:anusha@gmail.com
Sample user password:anusha

Pagination and filters have been implemented.

Command to run the project
> npm start

Here is the link for the execution of the project:https://youtu.be/RmerB2TNwE4

```
