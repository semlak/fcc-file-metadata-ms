this is a small microservice app that I have completed for an assignment through the freecodecamp.com cirriculum. The assignment, described at http://www.freecodecamp.com/challenges/file-metadata-microservice, is to create an api that allows you to submit a formdata object that includes a file upload. 

The userstories are the following: 

User Story: I can submit a FormData object that includes a file upload.

User Story: When I submit something, I will receive the file size in bytes within the JSON response


# Quick Start Guide

### Prerequisites

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [Git](https://git-scm.com/)


To obtain code, in bash, run:
$ git clone https://github.com/semlak/fcc-file-metadata-ms.git your-project

which will download to the 'your-project', which will be created in the process.
For running locally, you will need to have the following environmental variables set via the .env file, which is not included and which you need to create.


#running app
before running the first time, you need to run the following command in the project directory:
$ npm install

(You shouldn't need to run with root privledges. )

Assuming you don't have any problems, you can run the server:
$ npm start
  or
$ node server

Or you can run tests (the node server should not currently be running):
$ npm test
  or
$ node jasmine-node spec/TESTFILE



#HEROKU
you should probably research deploying heroku apps rather than relying on my documentation. For me, after creating my app and have heroku-toolbelt or similar instaled, and have heroku setup, I run:
$ heroku create fcc-image-search-api
for any environmental variables to set, you aren't using .env, so you use a command such as:
heroku config:add API_KEY='YOUR_API_KEY'




