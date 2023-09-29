const express = require('express');
const router = express.Router();
const pool = require("../../postbase.js");
const bodyParser = require('body-parser');
const port = 8070;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks;");
    res.json(allTasks.rows);
    console.log("Task displayed successfully.");
  } catch (err) {
    console.error(err.message);
    res.send("ERROR: " + err.message);
  }
});

module.exports = router;

/* GUIDE FOR POSTMAN:
- URL to be given: http://localhost:8070/tasks/display/
- Method: GET
- JSON to be passed in body:
    {}
