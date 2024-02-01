const pool = require('../db/db');

const getData = async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM stock');

        res.status(200).json(data.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message })
    }
}

module.exports = getData;
