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
      const { user_id, user_name } = req.body;
      await pool.query(
        "INSERT INTO users (user_id, user_name) VALUES ($1, $2) RETURNING *",
        [user_id, user_name]
      );
      res.json({ message: 'User created successfully.' });
      console.log("User created successfully.");
    } catch (err) {
      console.error(err.message);
      res.send("ERROR: " + err.message);
    }
  });

module.exports = router;