require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3001;

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

// Middleware
app.use(bodyParser.json());

// Register endpoint
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  

  const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, email, hashedPassword], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error registering user');
    } else {
      res.status(201).send('User registered successfully');
    }
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error logging in');
    } else {
      if (result.length > 0) {
        const user = result[0];
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (isPasswordCorrect) {
          const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.status(200).send({ token });
        } else {
          res.status(401).send('Invalid email or password');
        }
      } else {
        res.status(401).send('Invalid email or password');
      } 
    }
  });
});


// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];


  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });

};

// Profile route
app.get('/profile', authenticateToken, (req, res) => {
  const query = 'SELECT id, username FROM user WHERE id = ?';

  db.query(query, [req.user.userId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error fetching user profile');
    } 

    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).send('User not found');
    }
  });

});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
