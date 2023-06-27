const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// Untuk menerima req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/Perpustakaan');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Koneksi Ke MongoDB Gagal :')); 
db.once('open', function() { 
  console.log('Sukses Terkoneksi Ke MongoDb'); 
});

// Definisikan skema dan model Mongoose
const UserSchema = new mongoose.Schema({
  email: String,
  kataSandi: String,
});

const User = mongoose.model('User', UserSchema);

// Definisikan rute untuk endpoint pendaftaran (registrasi)
app.post('/api/registrasi', async (req, res) => {
  try {
    const { email, const express = require('express');
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
    kataSandi } = req.body;

    // Buat objek baru dari model User
    const user = new User({
      email,
      kataSandi,
    });

    // Simpan objek user ke database
    await user.save();

    res.status(201).json({ message: 'Pendaftaran berhasil' });
  } catch (error) {
    console.error('Pendaftaran gagal:', error);
    res.status(500).json({ message: 'Pendaftaran gagal' });
  }
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
