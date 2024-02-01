const { Pool } = require('pg'); 

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'intern',
    password: 'Rushabh@11',
    port: 5432,
});

module.exports = pool;

