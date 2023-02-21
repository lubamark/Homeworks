'use strict';

console.log('xhr');

const requestURL = 'https://jsonplaceholder.typicode.com/users';
const user = {
  name: 'User Booser', username: 'Ololo', email: 'cere@april.biz'
}

// const xhr = new XMLHttpRequest();

// xhr.open('GET', requestURL);
// xhr.responseType = 'json';
// xhr.onload = () => {
//   if (xhr.status >= 400) {
//     console.error('err', xhr.response);
//   }
//   console.log(xhr.response);
// }

// xhr.onerror = () => {
//   console.error('err', xhr.response);
// }

// xhr.send();

function sendRequest(method, url, body) {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      }
      resolve(xhr.response);
    }
    xhr.onerror = () => {
      reject(xhr.response);
    }
    xhr.send(JSON.stringify(body));
  })
}

sendRequest('GET', requestURL).then(data => {
  console.log(data);
}).catch(err => {
  console.error('Error', err);
});

sendRequest('POST', requestURL, user).then(data => {
  console.log(data);
}).catch(err => {
  console.error('Error', err);
})