// TODO 3: Import data students dari folder data/students.js
// code here

const {students} = require('../data/students.js') 

// Membuat Class StudentController
class StudentController {
    index(req, res) {
      // TODO 4: Tampilkan data students
      // code here

      res.send(students)
    }
  
    store(req, res) {
      // TODO 5: Tambahkan data students
      // code here

      students.push(req.body.student);
      res.send(students);
    }
  
    update(req, res) {
      // TODO 6: Update data students
      // code here
      
      const {id} = req.params;
      students[id] = req.body.student;
      res.send(students);
    }
    
    destroy(req, res) {
      // TODO 7: Hapus data students
      // code here
      
      const {id} = req.params;
      students.splice(id, 1)
      res.send(students);
    }
  }
  
  // Membuat object StudentController
  const object = new StudentController();
  
  // Export object StudentController
  module.exports = object;
