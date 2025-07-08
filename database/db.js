import sqlite3 from 'sqlite3';
sqlite3.verbose();

const db = new sqlite3.Database('./user_data.sqlite', (err) => {
  if (err) return console.error('DB connection error:', err.message);
  console.log('Connected to SQLite database.');
});


db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
)`);

export default db;