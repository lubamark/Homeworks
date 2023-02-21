'use strict';

console.log('Promises!');

// ========================
// console.log('Request data...');

// setTimeout(() => {
//   console.log('Preparing data...');
//   const data = {
//     status: 'working'
//   };

//   setTimeout(() => {
//     console.log('Data received...', data);
//   }, 2000);

// }, 2000);


// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...');
//     const data = {
//       status: 'working'
//     };
//     reject(data);
//   }, 2000)
// });

// p.then((data) => {
//   console.log('Data received...', data);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   })
// }).then((data) => {
//   console.log('Data modified...', data);
// }).catch((err) => {
//   console.error('Error', err);
// }).finally(() => {
//   console.log('Finally');
// })

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

sleep(2000).then(() => { console.log('After 2 s') });
sleep(3000).then(() => { console.log('After 3 s') });

Promise.all([sleep(2000), sleep(4000)]).then(() => {
  console.log('all promises');
});

Promise.race([sleep(2000), sleep(4000)]).then(() => {
  console.log('race promises');
});