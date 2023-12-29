// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    await Student.all()
      .then((students) => {
        const data = {
          message: "Menampilkkan semua student",
          data: students,
        };
        res.json(data);
        console.log(students);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Tidak dapat menampilkan semua student",
          err_message: err
        });
      });
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here

    await Student.create(req.body)
      .then((result) => {
        const data = {
          message: "Menambahkan data student",
          data: [
            result
          ],
        };
        res.json(data);

      })
      .catch((err) => {
        const data = {
          message: "Menambahkan data student gagal",
          error_message: err.message
        }
        res.status(500).json(data);
      });
  }

  async update(req, res) {
    const { id } = req.params;

    await Student.update(id, req.body)
      .then((result) => {
        const data = {
          message: `Mengedit student id ${id}`,
          data: result,
        };
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Student.destroy(id)
      .then((result) => {
        const data = {
          message: `Menghapus student id ${id}`,
          data: [result],
        };
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ message: `Tidak dapat menghapus student id ${id}`, error: error.message });
      });
  }

  show(req, res) {
    const { id } = req.params;

    Student.find(id)
      .then((result) => {
        const data = {
          message: `Mendapatkan student id ${id}`,
          data: [result],
        };

        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
