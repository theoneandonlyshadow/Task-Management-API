const express = require('express');
const router = express.Router();
const pool = require("../../postbase.js");
const bodyParser = require('body-parser');
const port = 8070;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.delete('/:user_id', async (req, res) => {
    try {
      const { user_id } = req.params;
      await pool.query("DELETE FROM users WHERE user_id = $1", [user_id]);
      res.json({ message: 'User deleted successfully.' });
      console.log("User deleted successfully.");
    } catch (err) {
      console.error(err.message);
      res.send("ERROR: " + err.message);
    }
  });

module.exports = router;


