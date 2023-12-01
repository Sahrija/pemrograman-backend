// console.log('djlf');
// let user = {
//   'nama': 'sahrija',
//   'lapar': true,
//   'makan' : function() {
//     this.lapar = false;
//   }
// }

// console.log(user);
// console.log(user.nama);
// console.log(user.lapar);
// user.makan();
// console.log(user.lapar);

// let {nama, lapar} = user;
// if(!lapar){console.log('turu');}

// console.log(nama);

/* 
di padang rumput hijau yang jauh, terdapat seorang pengembala domba sedang 
meneguk air dari botol peziarah, botol itu terbuat dari kulit binatang yang 
telah diawetkan



*/

const {index, store, update, destroy} = require("./task/controller/fruitController.js");

index();
store('nanas')
store('alpukat')
index();
destroy(1);
index();
update(4, 'stroberi')
index();
