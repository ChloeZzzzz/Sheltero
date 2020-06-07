# Sheltero
Job finding App designed for everyone. Visit the website at sheltero.herokuapp.com. The app can be run under the folder **Project/project_app and found** at : https://github.com/SaintTan/Sheltero

## To deploy backend
*Please ensure that you are on **master branch** before running the code provided below!*

Since the root of the branch is not the app, please use the command:
```git subtree push --prefix Project/project_app heroku master```
to deploy the app on heroku.

To run it simply type:
```cd Project/project_app``` and then ```mode app.js``` to run the app.

## To deploy frontend
*Please ensure that you are on **frontend-dev branch** before running the code provided below!*

Since the root of the branch is not the app, please use the command:
```git subtree push --prefix sheltero_UI/sheltero_app heroku master```
to deploy the app on heroku.

To run it simply type:
```cd sheltero_UI/sheltero_app``` and then ```npm start``` to run the app.

*note you might run into some problems regarding react-start; if so delete node_modules and run the codes below to fix it and re-run the code above*
```npm install``` and then ```npm audit fix```

## Routes and Controller
There are only 2 routes and controller used for Shelter:
**Job**
JobRouter which detects /job-search/ related search and JobController which handles the sending and receiving of information
**User**
UserRouter which detects /user/ related search and UserController which handles the sending and receiving of information

## Features
***Accounts and User Management***
**Sign up**

We have implemented a sign up function which would allow candidates to sign up onto our website; the data is currently stored using MongoDB Atlas. Candidates could pick whether they are an employee or employer. To ensure protection of user's personal information, the user's password is encrypted before saving into the 'database'. 

To access the signup function, simply click on the url link below, or visit the homepage and click on the *signup button*

URL Link (Backend): http://shelteroinf.herokuapp.com/user/signup

URL Link (Frontend): http://sheltero.herokuapp.com/signup

**Sign in**

The sign in feature has also been implemented and the identification of individuals is dealt with passport.js. It looks for the individual in the MongoDb and check to see if they are an existing user, and have the correct password. passport.js is responsible for rerouting users to the right direction, ie. if they are not the user signed in, they are redirected to a different page.

To access the signin function, simply click on the url link below, or visit the homepage and click on the *signin button*

URL Link (Backend): http://shelteroinf.herokuapp.com/user/login

URL Link (Frontend): http://sheltero.herokuapp.com/login

**User Profile**
A page dedicated to show user's information. Users are also able to edit their profile through this page.

- *Employee profile* -
A basic page that displays the basic information of employees, it includes: the names, email, company details of the person.

-*Employer profile*-
Similar to the employee page; However, with additional previleges of being able to post for jobs.

URL Link (Backend): http://shelteroinf.herokuapp.com/user

URL Link (Frontend): http://sheltero.herokuapp.com/user

**Update Profile**
Page for users to update their information.

URL Link (Backend): http://shelteroinf.herokuapp.com/user/updateUser

*Employer* URL Link (Frontend): http://sheltero.herokuapp.com/employeredit
*Employee* URL Link (Frontend): http://sheltero.herokuapp.com/employeeedit
***Job Searching and Posting Management***

**Job Searching**

A field for users to search for jobs is implemented to allow users to search for jobs. It displays the title, salary, details of the job, company who posted the job as well as their contact details. Users could search jobs any of values. This feature can also be access right after the user login. Users will be able to apply for jobs that they are interested in simply by clicking apply.

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

**Job Posting**
Only accessible once logging in by a user with type "Employer", can be accessed via the user's homepage. Users are able to post as much jobs as they wish and will receive a notification, once an employee clicks apply.

URL Link (Backend): http://shelteroinf.herokuapp.com/user/applyingJob

URL Link (Frontend): http://sheltero.herokuapp.com/job-posting

**Job Deleting**
Employers after posting jobs are also able to delete jobs. replace "delete_id" in the url link below.

URL Link (Backend): http://shelteroinf.herokuapp.com/job-deleting/?_id=delete_id

URL Link (Frontend): http://sheltero.herokuapp.com/job-delete/?_id=delete_id

**Job Notification**
A page to get job notifications of specific employers. Used by frontend to get notifications

URL Link (Backend): http://shelteroinf.herokuapp.com/user/jobNotification

**Job Apply**
Page to post for jobs application

URL Link (Backend): http://shelteroinf.herokuapp.com/job-search/apply-job

**Job Approve**
A page to get approved jobs of specific employees. Used by frontend to get notifications

URL Link (Backend): http://shelteroinf.herokuapp.com/user/approveApplication

## Testing
Automatic testing for the backend server can be done by visiting the project_app folder in Project :
```cd Project/project_app```
and run with the following code:
```npm test```