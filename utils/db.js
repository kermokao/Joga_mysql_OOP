const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'qwerty',
  database: process.env.DB_NAME || 'joga_mysql',
  port: Number(process.env.DB_PORT || 3306),
});

conn.connect((error) => {
  if (error) {
    console.error('MySQL connection failed:', error.message);
    return;
  }

  console.log('Connected to MySQL database');
});

module.exports = conn;
