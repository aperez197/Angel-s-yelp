const { Pool } = require('pg')

const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'yelp',
      password: 'Ap9568933',
      port: 5432,
    });
module.exports = {
  query: (text, params) => pool.query(text, params),
};