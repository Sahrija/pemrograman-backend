// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
  */
  static create(student) {
    return new Promise((resolve, reject) => {
      let { nama, nim, email, jurusan } = student;
      const query = `INSERT INTO students VALUES('','${nama}','${nim}','${email}','${jurusan}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;
      db.query(query, (err, results) => {

        if (err) return reject(err);

        const id = results.insertId;
        const new_student = this.find(id);
        resolve(new_student);
      });
    });

  }

  static update(id, student) {
    return new Promise((resolve, reject) => {
      // mengambil data student lama yang akan di edit untuk
      // men-set data lama yang tidak di edit
      const old_student_query = `SELECT * FROM students where id = '${id}'`;

      db.query(old_student_query, (err, old_student_results) => {

        if (err) { reject(err); return; };

        // check if the student wants to be updated is exists
        const [old_student] = old_student_results;
        if (!old_student) {
          reject({ message: `The student id ${id} to be updated was not found` })
        }
        else {
          const nama = student["nama"] ?? old_student["nama"];
          const nim = student["nim"] ?? old_student["nim"];
          const email = student["email"] ?? old_student["email"];
          const jurusan = student["jurusan"] ?? old_student["jurusan"];

          const query = `UPDATE students SET 
            nama = '${nama}', 
            nim = '${nim}', 
            email = '${email}', 
            jurusan = '${jurusan}', 
            updated_at = CURRENT_TIMESTAMP
            WHERE id = '${id}'
            `;

          db.query(query, (err, results) => {
            if (err) reject(err);
            resolve(results);
          });
        }

      });
    });
  }

  static destroy(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM students WHERE id = '${id}'`;

      db.query(query, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM students WHERE id = '${id}'`;

      db.query(query, (err, results) => {
        if (err) reject(err);
        const [student] = results;
        if (!student) reject({ message: `student id ${id} tidak ditemukan` });
        resolve(student);
        console.log("this line will be executed even the promise is rejected without return")
      });
    })
  }

}

// export class Student
module.exports = Student;
