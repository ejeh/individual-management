# settings Management

WHAT: This project is a microservice that manages client's state and LGA code.

WHY: A standalone microservice which can be independently scaled to handle all client's personal related tasks.

HOW: The microservice exposes CRUD endpoints for manipulating state and LGA code related to clients.

## Requirements
* NodeJS
* MongoDB


## Setup
* clone Repository containing the project `git clone https://github.com/ejeh/settingsManagement.git`
* cd project `cd settingsManagement.git/src`
* set up mongo database
* Run `npm install` to install the needed node js packages.
* Setup Environment variables (check the .env sample to see the environment variables needed).

## How to run
Run this command to run the application `node server.js` 

## Documentation

## Sample Environment Variables
* PORT = 8000
* NODE_ENV = 'development'
* DBURL='mongodb://localhost/settingsManagement'

### Note: the values of the environment variables are dummy values.

