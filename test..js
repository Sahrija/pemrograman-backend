// const { updateLanguageServiceSourceFile } = require("typescript");

// console.log('downloading');

// setTimeout(() => {
//   console.log('2 seconds done downloading');
// }, 2000);`

// setTimeout(() => {
//   console.log('1 second done downloading');
// }, 1000);


// console.log('done')


// console.log('opened chrome browser');

// console.log('downloading 1 hour file');
// setTimeout(() => {
//   console.log('download complete');
// }, 5000);

// console.log('opening youtube');



const prepare = () => {
  return new Promise((resolve, reject) => {
    // reject('preparing failed');
    setTimeout(() => {
      resolve('preparing complete');
    }, 3000);
  });
}

const boil = () => {
  return new Promise((resolve, reject) => {
    // reject('boiling failed');
    setTimeout(() => {
      resolve('boiling complete');
    }, 7000);
  })
}

const cook = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('cooking complete');
    }, 5000)
  });
}


const main = () => {
  prepare().then((result) => {
    console.log(result);
    return boil();
  }).then((result) => {
    console.log(result);
    return cook();
  }).then((result) => {
    console.log(result);
  }).catch((err) => { console.log('preparing: ' + err); })
    .catch((err) => { console.log('abc' + err) });
}

// async function main() {
//   console.log(await prepare());
//   console.log(await boil().catch((err) => console.log(err)) ?? '');
//   console.log(await cook());
// }
main();


