## Feb-14-2023

- Cloned project and created my own branch called davreg-branch
- Started writing the docker-compose.yaml file, volume and PostgreSQL database
- Did research on render.com

## Feb-15-2023

- Fixed our clone had to re clone due to gitlab problems
- Got docker up and running for the team

## Feb-16-2023

- Got FastAPI server up and running
- starting to plan out our tables
- wrote 001_create_first_table with the questions table inside
- attempting to create a users service doing some research to understand it more

## Feb-21-23

- attempted to do a merge request with Gio's code but found out he was in main
- also figured out that we were doing merge's to the past project so it is causing a lot of problems for us
- basically did problem solving all day had little to no success

## Feb-22-23

- Made the user table, routers, and users_queries
- Got it connected to beekeeper and got it runnin
- made a table-branch so Christian can start working on the leaderboard stuff in seperate branch
- Started making questions table, routers, and queries

## Feb-23-23

- Worked on database and got connected to beekeeper for accounts and questions
- Rewrote the main.py file with CORS requirements
- Updated migrations file

## Feb-24-23

- Finished database tables and got to a good place for backend
- Starting to help with leaderboard backend tables, routes, and queries
- Once leaderboard is done then backend should be set up
- Researching front end auth material

## Feb-27-23

- Finished the leaderboard table and got it connected to beekeeper
- wrote the leaderboard.py for the routers directory and still need to check it
- updated the migrations file with the leaderboard table included
- Updated the main.py now that the leaderboard is hooked up I added the route to the file

## Feb-28-23

- Helped Christian with leaderboard queries had some progress
- Started researching unit tests and writing it
- Had some issues with the unit test but still in research development stages

## March-1-23

- Was having problems with the unit test but figured out you had to exec into the right container
- Finished unit test for "get all questions" and got to pass
- Helping Christian debug some leaderboard stuff
- Once leaderboard is set up then backend stuff should be all set up
- Gonna start helping Gio frontend nav.js

## March-2-23

- Did two merges with alyn and christian to main
- Trying to figure out Nav.js stuff, realized frontend development is hard for me lol
- Backend is very close to being done, one final feature for avatar img in accounts and all is well
- Finished the Nav.js file but cannot test yet waiting for Gio to finish the app.js with the routes
- Starting on the leaderboard.js file for frontend

## March-3-23

- Helping others write unit tests
- Starting the update profile.js file

## March-6-23

- Finished the update profile.js file
- gonna do a final merge for front and backend stuff and hopefully the mvp is done

## March-7-23

- Starting docs stuff
- mvp not done yet still working on some leaderboard kinks

## March-8-23

- Continuing docs
- Helping debug some pipeline job errors
- Hoping the app will be done today

## March-9-23

- Got the deployment up today which is huge
- Having some route issues trying to debug
- Had to redeploy because tables migrations were out dated
- Tomorrow gonna have to fix some route issues

## March-10-23

- Today is the day it's due let's hope we can get everything in working order
- Route paths are working had to change the windows to navigate
- Now having a CORS error which is no fun
- Everything is working!!!!
- Even added a delete account button
- Victory!!!
