const express = require('express');
const router = express.Router();
const pool = require("../../postbase.js");

router.put('/', async (req, res) => {
    try {
      const { status, task_id } = req.body;
      pool.query(
        "UPDATE tasks SET status = $1 WHERE task_id = $2",
        [status, task_id],
        (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send("ERROR: " + err.message);
          } else {
            console.log("Task marked successfully.");
            res.status(200).json({ message: 'Task marked successfully.' });
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
- URL to be given: http://localhost:8070/tasks/markcomplete
- Method: PUT
- JSON to be passed in body:
    {
        "status": "Marked Complete"
        "task_id": {task_id}
    }
*/
