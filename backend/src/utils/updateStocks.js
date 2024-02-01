const pool = require("../db/db");
const fetch = require("node-fetch");

const updateStocks = async () => {
  try {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    const data = await response.json();

    // Check if data is an object
    if (typeof data !== "object") {
      console.error("Data is not an object.");
      return;
    }

    const client = await pool.connect();
    try {
      // Begin the transaction
      await client.query("BEGIN");

      // Delete existing entries from the table
      await client.query("DELETE FROM stock");

      const dataArray = Object.entries(data);

      for (const [key, value] of dataArray.slice(0, 10)) {
        const { name, last, buy, sell, volume, base_unit } = value;
  
        const query = {
          text: 'INSERT INTO stock(name, last, buy, sell, volume, base_unit) VALUES($1, $2, $3, $4, $5, $6)',
          values: [name, last, buy, sell, volume, base_unit],
        };

        await client.query(query);
    }

      // Commit the transaction
      await client.query("COMMIT");

      console.log("Data updated successfully.");
    } catch (error) {
      // If an error occurs, roll back the transaction
      await client.query("ROLLBACK");
      throw error;
    } finally {
      // Release the client back to the pool
      client.release();
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = updateStocks;
