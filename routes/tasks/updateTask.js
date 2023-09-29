const express = require('express');
const router = express.Router();
const pool = require("../../postbase.js");

router.put('/:user_id', async (req, res) => {
    try {
      const { task_id, task_name } = req.body;
      pool.query(
        "UPDATE tasks SET task_name = $1 WHERE task_id = $2",
        [task_name, task_id],
        (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send("ERROR: " + err.message);
          } else {
            console.log("Task updated successfully.");
            res.status(200).json({ message: 'Task updated successfully.' });
          }
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("ERROR: " + err.message);
    }
});

module.exports = router;

/* GUIDE FOR POSTMAN:
- URL to be given: http://localhost:8070/tasks/update/{user_id}
- Method: PUT
- JSON to be passed in body:
    {
        "task_name": {task_name),  --> rename task into something else
        "task_id": {task_id}
    }
*/
