// Melalkukan import mongoosenya yang sudah diinstal
const mongoose = require("mongoose");

// Lalu membuat variabel baru, dan memanggil variabel mongoose
const mahasiswaScheme = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  nim: {
    type: Number,
    required: true,
  },
  jurusan: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Mahasiswa", mahasiswaScheme);
/* 
  Didalam dokumentasi resminya untuk membuat model bisa menggunakan cara membuat variabal
  namun didisini menggunakan teknik export agar modelnya bisa digunakan dimana saja. 
*/
