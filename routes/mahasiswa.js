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

/**
 * GET -> menampilkan seluruh data
 * POST -> menambahkan data
 * PUT/:id -> mengubah data
 * DELETE/:id -> menghapus data
 * GET/:id -> menampilkan data berdasarkan id tertentu.
 */

/**
 * GET /api/mahasiswa Menampilkan seluruh data
 * POST /api/mahasiswa Menambah data
 * GET /api/mahasiswa/{id} Menampikan data berdasarkan ID
 * PUT /api/mahasiswa/{id} Perbarui data
 * DELETE /api/mahasiswa/{id} Hapus data
 */

// Lalu export routernya
module.exports = router;
