<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="task-management-api" />

  &#xa0;
</div>

<h1 align="center">Task Management API</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/theoneandonlyshadow/task-managemnet-api?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/theoneandonlyshadow/task-managemnet-api?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/theoneandonlyshadow/task-managemnet-api?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/theoneandonlyshadow/task-managemnet-api?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/techcorp?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/techcorp?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/techcorp?color=56BEB8" /> -->
</p>


 <h4 align="center"> 
	Task Management API is ready for review
</h4> 

<hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/theoneandonlyshadow" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Robust and feature-rich backend API for a task management application with Node.js PostgreSQL & Postman. The API allows users to efficiently manage their tasks, collaborate with others, and stay organized. The design prioritizes functionality, performance, and scalability.

## :sparkles: Features ##

:heavy_check_mark: Set up a Node.js server to handle API requests\
:heavy_check_mark: Assignment of Tasks to Users\
:heavy_check_mark: Database Migrations/Seeds\
:heavy_check_mark: RESTful CRUD Operations\
:heavy_check_mark: Error handling and validation.\
:heavy_check_mark: Implemented user-specific views for tasks.\
:heavy_check_mark: Allow users to mark tasks as completed.

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postman](https://www.postman.com/)
- [Docker](https://www.docker.com/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/), [Docker](https://www.docker.com/products/docker-desktop/) & [PostgreSQL](https://www.postgresql.org/download/) installed.

## Installed NPM Packages ##
- [pg-pool](https://www.npmjs.com/package/pg-pool) : collection of database connections that can be reused.
- [Nodemon](https://www.npmjs.com/package/nodemon) : nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [Express.js](https://www.npmjs.com/package/express) : framework that works on top of Node.js web server functionality to simplify its APIs.

## Installed VS Code Extensions ##
- PostgreSQL : to connect VS Code to PostgreSQL
- GitHub : to connect GitHub account from VS Code
- Docker : simplifed view of containers.
- Express : Hosts current workspace with Express web server in Visual Studio Code.
- WSL :  Linux-based tools, runtimes, and utilities.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/theoneandonlyshadow/task-management-api

# Access
$ cd task-management-api

# Install dependencies
$ npm i

# Run the project with nodemon
$ nodemon index

# The server will initialize in the http://localhost:8070
```

## Steps to recreate project ##

- Install [Docker Desktop](https://docs.docker.com/engine/install/)
- Install [VS Code](https://code.visualstudio.com/download)
- Install [PostgreSQL](https://www.postgresql.org/download/)
- Install [Postman](https://www.postman.com/downloads/)
- Create **docker-compose.yml** file.
- Copy the same contents from this repo.
- Open Docker Desktop and start.
- (PowerShell) Type `docker compose up`
- Project container should be visible in the Docker Desktop.
- Open pgAdmin 4 (PostgreSQL) and create a new database called "techcorp". Dont worry about creating tables, as both users and tasks table will initalize after running index.js. 
- Open VS Code, open Command Palette and type **New Query** (requires PostgreSQL extension) and type in credentials.
- (WSL) Type *sudo systemctl status postgresql* to see if PostgreSQL is active.
- (WSL) Type `psql -U postgres -h localhost` or `psql -h 127.0.0.1 -p 5432 -U postgres` to connect to PostgreSQL.
- Open Postman and review my project according to the following endpoints:
- Common Endpoints
- -> /displaytables: to display the tables
- -> /displaydb: to display databases
- -> /authenticate/{user_id}: authenticate user to see their tasks.

- User Endpoints:
- -> /users/create: Create a user (POST)
- -> /users/display: Read users (display all users) (GET)
- -> /users/update: Update a user (PUT)
- -> /users/delete: Delete a user (DELETE)
- -> /users/authenticate/{user_id}: "authenticate user's user_id to see their tasks. (GET)
- Task Endpoints
- -> /tasks/create: Create a task (POST)
- -> /tasks/display: Read tasks (display all tasks) (GET)
- -> /tasks/update: Update a task (PUT)
- -> /tasks/delete: Delete a task (DELETE)
- -> /tasks/assigntask/{user_id}: Assign Task to a User (POST)
- -> /tasks/markcomplete: Write "Marked Complete" to a task. "Not Complete" by default when creating a task for a user (PUT).

## NOTE ##
If any feature is not working, please reinstall the tech and try again. If you would like a video of my screen recording about the full project, **please let me know at madhavnair700@gmail.com** or message me in WellFound.

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with 3am efforts by <a href="https://github.com/theoneandonlyshadow" target="_blank">Madhav Nair</a>

&#xa0;

<a href="#top">Back to top</a>
