const {index, store, update, destroy} = require("./task/controller/fruitController.js");

index();
store('nanas')
store('alpukat')
index();
destroy(1);
index();
update(4, 'stroberi')
index();
