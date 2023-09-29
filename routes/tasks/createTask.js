const express = require('express');
const router = express.Router();
const pool = require("../../postbase.js");
const bodyParser = require('body-parser');
const port = 8070;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
      const { task_id, task_name, user_id } = req.body;
      await pool.query(
        "INSERT INTO tasks (task_id, task_name, user_id) VALUES ($1, $2, $3) RETURNING *",
        [task_id, task_name, user_id]
      );
      res.json({ message: 'Task created successfully.' });
      console.log("Task created successfully.");
    } catch (err) {
      console.error(err.message);
      res.send("ERROR: " + err.message);
    }
  });

module.exports = router;

/* GUIDE FOR POSTMAN:
- URL to be given: http://localhost:8070/tasks/create/
- Method: POST
- JSON to be passed in body:
    {
        "task_id": {task_id},
        "task_name": {task_name),
        "user_id": {user_id}
    }
*/
