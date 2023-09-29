const express = require('express');
const router = express.Router();
const pool = require("../../postbase.js");
const bodyParser = require('body-parser');
const port = 8070;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.post('/:user_id', async (req, res) => {
    try {
      const { task_id, task_name, user_id } = req.body;
      pool.query(`
        INSERT INTO tasks (task_id, task_name, user_id)
        VALUES ($1, $2, $3)
      `, [task_id, task_name, user_id], (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("ERROR: " + err.message);

        } else {
          console.log('Task inserted successfully');
          res.status(200).send('Task inserted successfully');
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("ERROR: " + err.message);
    }
});

module.exports = router;

/* GUIDE FOR POSTMAN:
- URL to be given: http://localhost:8070/tasks/assign/{user_id}
- Method: POST
- JSON to be passed in body:
    {
        "task_id": {task_id},
        "task_name": {task_name),
        "user_id": {user_id}
    }
