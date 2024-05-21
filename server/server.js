const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Priya02012005',
  database: 'careercenter'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  const values = [username, email, password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).send('Error inserting data');
      return;
    }
    console.log('Data inserted into MySQL');
    res.status(200).send('Data inserted successfully');
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    if (results.length > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
