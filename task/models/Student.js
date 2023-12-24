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
        resolve(results);
      });
    });
  }

  static update(id, student) {
    return new Promise((resolve, reject) => {
      // mengambil data student lama yang akan di edit untuk
      // men-set data lama yang tidak di edit
      const old_student_query = `SELECT * FROM students where id = ${id}`;

      db.query(old_student_query, (err, old_student_results) => {

        const old_student = old_student_results;

        const nama = student["nama"] ?? old_student[0]["nama"];
        const nim = student["nim"] ?? old_student[0]["nim"];
        const email = student["email"] ?? old_student[0]["email"];
        const jurusan = student["jurusan"] ?? old_student[0]["jurusan"];

        const query = `UPDATE students SET 
          nama = '${nama}', 
          nim = '${nim}', 
          email = '${email}', 
          jurusan = '${jurusan}', 
          updated_at = CURRENT_TIMESTAMP
          WHERE id = '${id}'
          `;

        db.query(query, (err, results) => {
          resolve(results);
        });
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



}

// export class Student
module.exports = Student;
