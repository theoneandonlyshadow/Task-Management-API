const express = require('express');
const bodyParser = require('body-parser');
const pool = require("./postbase.js");
const port = 8070;
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

fetch('http://localhost:8070/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text().then(text => text ? JSON.parse(text) : {})
})
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});

app.listen(port, () => {
 console.log(`Postgres + Node.js running on port ${port}`);
});


// Root route handler
app.get("/", (req, res) => {
  res.json(
    {
      "title": "Welcome to my Tech Corp Back-End assignment!",
      "endpoints": {
        "/displaytables": "to display the tables",
        "/displaydb": "to display databases",
        "/authenticate": "authenticate user to see their tasks."
      },
       
      "USERS": {
        "/users/create": "Create a user",
        "/users/display": "Read users (display all users)",
        "/users/update": "Update a user",
        "/users/delete": "Delete a user"
      },

      "TASKS": {
        "/tasks/create": "Create a task",
        "/tasks/display": "Read tasks (display all tasks)",
        "/tasks/update": "Update a task",
        "/tasks/delete": "Delete a task"
      }
    }
  );
});


// CREATE USERS TABLE
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL
  );
`, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Users table created successfully');


// CREATE TASKS TABLE
pool.query(`
CREATE TABLE IF NOT EXISTS tasks (
  task_id SERIAL PRIMARY KEY,
  task_name VARCHAR(255) NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
  );
  `, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Tasks table created successfully');
    }
  });
}
});





// DISPLAY DB
app.get('/displaytables', async (req, res) => {
  try{
    const relations = await pool.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';"
    );

    if(relations && relations.rows) {
        res.json(relations.rows);
    } else {
        res.json({});
    }

  } catch (err) {

    console.error(err.message);

  }
});

// DISPLAY DATABASES
app.get('/displaydb', async (req, res) => {
  try{
    const databases = await pool.query(
      "SELECT datname FROM pg_database WHERE datistemplate = false;"
    );

    if(databases && databases.rows) {
        res.json(databases.rows);
    } else {
        res.json({});
    }

  } catch (err) {

    console.error(err.message);

  }
});

// 404 NOT FOUND
app.get('/:universalURL', (req, res) => {
 res.send("404 URL NOT FOUND");
});

// Import user routes
const createUserRoute = require('./routes/users/createUser');
const updateUserRoute = require('./routes/users/updateUser');
const deleteUserRoute = require('./routes/users/deleteUser');
const displayUserRoute = require('./routes/users/displayUser');
const authenticateUserRoute = require('./routes/users/authenticate');


// Import tasks routes
const createTaskRoute = require('./routes/tasks/createTask');
const updateTaskRoute = require('./routes/tasks/updateTask');
const deleteTaskRoute = require('./routes/tasks/deleteTask');
const displayTaskRoute = require('./routes/tasks/displayTask');
const assignTaskRoute = require('./routes/tasks/assignTask');
const markComplete = require('./routes/tasks/markComplete');


// USERS GOES THERE
app.use('/users/create', createUserRoute);
app.use('/users/update', updateUserRoute);
app.use('/users/delete', deleteUserRoute);
app.use('/users/display', displayUserRoute);
app.use('/users/authenticate', authenticateUserRoute);

// TASKS GOES THERE
app.use('/tasks/create', createTaskRoute);
app.use('/tasks/update', updateTaskRoute);
app.use('/tasks/delete', deleteTaskRoute);
app.use('/tasks/display', displayTaskRoute);
app.use('/tasks/assign', assignTaskRoute);
app.use('/tasks/markComplete', markComplete);
