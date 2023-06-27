const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/Perpustakaan');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Koneksi Ke MongoDB Gagal :'));
db.once('open', function() {
  console.log('Sukses Terkoneksi Ke MongoDb');
});

const UserSchema = new mongoose.Schema({
  email: String,
  kataSandi: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/api/registrasi', async (req, res) => {
  try {
    const { email, kataSandi } = req.body;

    const user = new User({
      email,
      kataSandi,
    });

    await user.save();

    res.status(201).json({ message: 'Pendaftaran berhasil' });
  } catch (error) {
    console.error('Pendaftaran gagal:', error);
    res.status(500).json({ message: 'Pendaftaran gagal' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, kataSandi } = req.body;

    // Cari pengguna berdasarkan email dan kata sandi
    const user = await User.findOne({ email, kataSandi });

    if (user) {
      res.status(200).json({ message: 'Login berhasil', userData: user });
    } else {
      res.status(401).json({ message: 'Login gagal' });
    }
  } catch (error) {
    console.error('Kesalahan saat login:', error);
    res.status(500).json({ message: 'Login gagal' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
