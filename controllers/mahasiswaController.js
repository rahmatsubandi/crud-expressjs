// Membuat variabel Mahasiswa dan mengimport/required ke model Mahasiswa
const Mahasiswa = require("../models/Mahasiswa");

// Jika menggunakan metod export seperti dibawah ini, maka semua metod yang ada di dalam object akan ter export
module.exports = {
  viewMahasiswa: async (req, res) => {
    try {
      // Membuat variabel mahasiswa, dan await mengambil dari model Mahasiswa
      // dan menggunakan method find untuk mnegambil semua collection mahasiswa di db Mongo nya
      const mahasiswa = await Mahasiswa.find();
      // Membuat variabel untuk alernya
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      // membuat variabel isinya object yang memiliki sebuah pesan isinya ngambil dari variabel alertMessage dan alertStatus
      const alert = { message: alertMessage, status: alertStatus };
      /* Lalu render viewnya yang ada di dalam file index
      menampilkan datanya dan mendestractur lalu panggil variabel mahasiswa
       Lalu merender alert yang sudah di deklar di atas */
      res.render("index", {
        mahasiswa,
        alert,
        title: "CRUD",
      });
    } catch (error) {
      res.redirect("/mahasiswa");
    }
  },

  // Method untuk CRUD mahasiswa

  /* Membuat fungsi untuk menambahkan data di form
 dan menggunakan async await */
  addMahasiswa: async (req, res) => {
    // memberi validasi untuk inputan yang kosong
    try {
      const { nama, nim, jurusan, alamat } = req.body;
      await Mahasiswa.create({ nama, nim, jurusan, alamat });
      // ketika create data memberikan notifikasi
      req.flash("alertMessage", "Success add data Mahasiswa");
      req.flash("alertStatus", "success");
      res.redirect("/mahasiswa"); // Setelah berhasil ngecreate data akan meredirect ke tjuan yang sudah ditentukan
    } catch (error) {
      // ketika create data error memberikan notifikasi
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      // ketika inputa kosong redirect kehalaman
      res.redirect("/mahasiswa");
    }
  },

  // Membuat fungsi untuk Edit Mahasiswa
  editMahasiswa: async (req, res) => {
    try {
      // Membuat variabel yang menerima id, dan name yang didapat dari req body atau yang di input user
      const { id, nama, nim, jurusan, alamat } = req.body;
      /* searcing atau mencari variabel dan mengecek _id yang ada di req body yang dikirim
   _id didapat database dan id isinya dari inputan user */
      const mahasiswa = await Mahasiswa.findOne({ _id: id });
      /* mahasiswa diambil dari fungsi diatas dan dot name diambil dari database = name yang didapat dari req body
   yang tentu dikirimkan dari inputan user */
      mahasiswa.nama = nama;
      mahasiswa.nim = nim;
      mahasiswa.jurusan = jurusan;
      mahasiswa.alamat = alamat;
      // Menyimpan datanya ke database
      await mahasiswa.save();
      // ketika edit data memberikan notifikasi
      req.flash("alertMessage", "Success edit data mahasiswa");
      req.flash("alertStatus", "success");
      // Setelah berhasil maka meredirect ke tujuan yang ditentukan
      res.redirect("/mahasiswa");
    } catch (error) {
      // ketika create data error memberikan notifikasi
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      // ketika inputa kosong redirect kehalaman
      res.redirect("/mahasiswa");
    }
  },

  // Membuat fungsi untuk Hapus Mahasiswa
  deleteMahasiswa: async (req, res) => {
    try {
      /*
  Membuat variabel yang menerima id yang didapat dari params
  _id didapat database dan id isinya dari params
  */
      const { id } = req.params;
      // cek data yang mau di delete
      const mahasiswa = await Mahasiswa.findOne({ _id: id });
      // setelah datanya sudah didapat maka me removenya
      await mahasiswa.remove();
      // ketika delete data memberikan notifikasi
      req.flash("alertMessage", "Success delete data mahasiswa");
      req.flash("alertStatus", "warning");
      // setelah berhasil remove maka melakukan redirect
      res.redirect("/mahasiswa");
    } catch (error) {
      // ketika create data error memberikan notifikasi
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      // ketika inputa kosong redirect kehalaman
      res.redirect("/mahasiswa");
    }
  },
};
