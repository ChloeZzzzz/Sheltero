# Sheltero
Job finding App designed for everyone. Visit the website at sheltero.herokuapp.com. The app can be run under the folder **Project/project_app and found** at : https://github.com/SaintTan/Sheltero

## To deploy backend
*Please ensure that you are on **master branch** before running the code provided below!*

Since the root of the branch is not the app, please use the command:
```git subtree push --prefix Project/project_app heroku master```
to deploy the app on heroku.

## To deploy frontend
*Please ensure that you are on **frontend-dev branch** before running the code provided below!*

Since the root of the branch is not the app, please use the command:
```git subtree push --prefix sheltero_UI/sheltero_app heroku master```
to deploy the app on heroku.

To run it simply type:
```cd sheltero_UI/sheltero_app``` and then ```npm start``` to run the app.

*note you might run into some problems regarding react-start; if so delete node_modules and run the codes below to fix it and re-run the code above*
```npm install``` and then ```npm audit fix```

## Features
**Sign up**

We have implemented a sign up function which would allow candidates to sign up onto our website; the data is currently stored in the models folder, and is therefore not connected to a cloud database. However, the user is still allowed to signup. Candidates could pick whether they are an employee or employer. To ensure protection of user's personal information, the user's password is encrypted before saving into the 'database'. 

To access the signup function, simply click on the url link below, or visit the homepage and click on the *signup button*

URL Link (Backend): http://shelteroinf.herokuapp.com/user/signup

URL Link (Frontend): http://sheltero.herokuapp.com/signup

**Sign in**

The sign in feature has also been implemented and the identification of individuals is dealt with passport.js. It looks for the individual in the models folder and check to see if they are an existing user, and have the correct password. passport.js is responsible for rerouting users to the right direction, ie. if they are not the user signed in, they are redirected to a different page

To access the signin function, simply click on the url link below, or visit the homepage and click on the *signin button*

URL Link (Backend): http://shelteroinf.herokuapp.com/user/login

URL Link (Frontend): http://sheltero.herokuapp.com/login

**Job Searching**

A field for users to search for jobs is implemented to allow users to search for jobs. It displays the title, salary, details of the job, company who posted the job as well as their contact details. Users could search jobs any of values. This feature can also be access right after the user login.

URL (Frontend): http://sheltero.herokuapp.com/job

There are three ways of job searching:

- *By keyword* -
This function enables users to find jobs with a few known keywords. It will return the job information of all jobs having that keywords in its information (all attributes in the database).
    This function could be accessed by replacing "your_keyword" in the url link below.

    URL Link (Backend): http://shelteroinf.herokuapp.com/job-search/byKeyword/?keyword=your_keyword

- *By tag* - 
    To limit the result from the byKeyword function, users could use byTag function to search job by their tags. This allows them to find jobs in a specific category. Tags are assigned by the employers.
    This function could be accessed by replacing "your_tag" in the url link below.

    URL Link (Backend): http://shelteroinf.herokuapp.com/job-search/byTag/?jobTag=your_tag

- *By area* - 
    In order to let the users to choose jobs that are close to them, a byArea function could be used to return jobs that are in a particular area (suburb). This function could be accessed by replacing "your_area" in the url link below.

    URL Link (Backend): http://shelteroinf.herokuapp.com/job-search/byArea/?jobArea=your_area

Additionally you can access the function after signing in (and sign up if you haven't done so).
