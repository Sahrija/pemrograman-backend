/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
function showDownload(result) {
  console.log("Download selesai");
  console.log(`Hasil Download: ${result}`);
}

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
const download = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = "windows-10.exe";
      resolve(result);
    }, 3000);
  });
}

download().then((result) => {
  return showDownload(result)
});

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
