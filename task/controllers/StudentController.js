// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
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
      .catch(
        (err) => {
          const data = {
            message: "Menambahkan data student gagal",
            error_message: err.message
          }
          res.json(data);
        }
      )


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
      }).catch((error) => {

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
      });
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
