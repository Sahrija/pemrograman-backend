const fruits = require('../../data/fruits.js')

const index = () => {
  console.log('================================');
  for (const fruit of fruits) {
    console.log(fruit);
  }
  console.log('================================');
};

const store = (data) => {
  fruits.push(data);
  console.log(`===== add ${data}`)
}

const update = (index , data) => {
  fruits[index] = data;
  console.log(`===== update ${data}`)
}

const destroy = (index) => {
  const data = fruits.splice(index, 1);
  console.log(`===== delete ${data} ${index}`)
}

module.exports = { index: index, store: store, update: update, destroy: destroy };
