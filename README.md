# Mongo DB Intro



## Requirements

* [Node](https://nodejs.org/en/download/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [GitHub](https://www.github.com)
* [Express](https://expressjs.com/)
* [Express_Generator](https://www.npmjs.com/package/express-generator/)
* [Morgan](https://www.npmjs.com/package/morgan)
* [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
* [Mongoose](https://mongoosejs.com/)


## Overview
Express generator will pre-make the server, folders and routes structure for you.

### In Terminal
First you will need to initialize/create the application. Create the directory where you would like this to live. Once you are in your new directory: 

1. install express generator ```npm i express-generator -g```  
   1. this sets it globally, only need to run once on your computer
2. Start your project ```express "project-name-here" --view=ejs```
3. cd into the project directory
4. Run  ```npm init```
5. Run ```npm i mongoose```
6. Run ``` touch .gitignore``` 
   1. Add ```/node_modules``` to the file.
7. Connect to or init git repo
8. Run ```touch README.md``` as needed/desired


## Create Git Repo

### GitHub
1. Create new repo with app name
2. Do not add readme or anything.
   1. You can add this via terminal if needed. 

### In Terminal
1. Run ```git init```
2. Run ```git add .```
3. Run ```git commit -m "first commit"```
4. Run ```git remote add origin https://github.com/'USERNAME'/'repo-name'.git```
   1. This URL can be copied directly from the GitHub Repo
5. Push files to Repo
   1. Run ```git push --set-upstream origin master```
- 'git push' will throw an error
- 'git push origin master' will push to your repo only once. You need to set the upstream to continually push.


## Delete Items
Edit your ejs files to display 'HTML' dynamically

### App.js
1. Comment or delete out lines 3,12,13,14,20
