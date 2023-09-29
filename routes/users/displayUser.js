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
          const allUsers = await pool.query("SELECT * FROM users;");
      
          if(allUsers && allUsers.rows) {
              res.json(allUsers.rows);
          } else {
              res.json({});
          }
      
        } catch (err) {
          console.error(err.message);
          res.send("ERROR: " + err.message);
        }
});

module.exports = router;

/* GUIDE FOR POSTMAN:
- URL to be given: http://localhost:8070/users/display
- Method: GET
- JSON to be passed in body:
    {}
*/
