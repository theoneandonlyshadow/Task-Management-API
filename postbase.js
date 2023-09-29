const Pool = require("pg").Pool;

const pool = new Pool({

    user: "postgres", //username
    password: "root", //password
    database: "techcorp", //database name
    host: "localhost", //host (localhost by default)
    port: 5432 //port for psql
});

module.exports = pool;
