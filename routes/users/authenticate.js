const express = require('express');
const router = express.Router();
const pool = require("../../postbase.js");

router.get('/:user_id', async (req, res) => {
    try {
      const { user_id } = req.params;
      const result = await pool.query(
        "SELECT task_name, task_id, user_id FROM tasks WHERE user_id = $1",
        [user_id]
      );
      console.log("User authenticated and shown tasks successfully.");
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("ERROR: " + err.message);
    }
});

module.exports = router;

/* GUIDE FOR POSTMAN:
- URL to be given: http://localhost:8070/users/authenticate/{user_id}
- Method: GET
- JSON to be passed in body:
    {
        "user_id": {user_id}
    }
*/
