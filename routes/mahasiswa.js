// membuat variable router dengan require atau export variabel express
// Dan menggunakan metode Router
const router = require("express").Router();
// export controller yang ingin dipakai
const mahasiswaController = require("../controllers/mahasiswaController");

// endpoint mahasiswa
router.get("/", mahasiswaController.viewMahasiswa); // Untuk Mahasiswa
router.post("/", mahasiswaController.addMahasiswa); // End point untuk tambah data di Mahasiswa
router.put("/", mahasiswaController.editMahasiswa); // Mendeklarasikan untuk edit Mahasiswa
router.delete("/:id", mahasiswaController.deleteMahasiswa); // membuat endpoint delete
