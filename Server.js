const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/Perpustakaan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Definisikan skema dan model User
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Endpoint untuk registrasi
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Buat instance baru dari model User
  const newUser = new User({ username, password });

  // Simpan user ke database
  newUser.save((err, savedUser) => {
    if (err) {
      console.error('Failed to register:', err);
      res.status(500).json({ error: 'Failed to register' });
    } else {
      res.status(200).json({ message: 'Registration successful' });
    }
  });
});

// Endpoint untuk login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Cari pengguna berdasarkan username dan password
  User.findOne({ username, password })
    .then(foundUser => {
      if (foundUser) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Failed to login' });
    });
});

// Jalankan server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
