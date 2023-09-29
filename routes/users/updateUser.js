const express = require('express');
const router = express.Router();
const pool = require("../../postbase.js");
const bodyParser = require('body-parser');
const port = 8070;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.put('/', async (req, res) => {
    try {
      const { user_id } = req.params;
      const { user_name } = req.body;
      await pool.query(
        "UPDATE users SET user_name = $1 WHERE user_id = $2",
        [user_name, user_id]
      );
      res.json({ message: 'User updated successfully.' });
      console.log("User updated sucessfully.");
    } catch (err) {
      console.error(err.message);
      res.send("ERROR: " + err.message);
    }
  });

module.exports = router;

/* GUIDE FOR POSTMAN:
- URL to be given: http://localhost:8070/users/update
- Method: PUT
- JSON to be passed in body:
    {
        "user_name": {user_name), --> changes current username to this username
        "user_id": {user_id}
    }
*/
