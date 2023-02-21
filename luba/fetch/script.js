'use strict';

console.log('fetch!');


const requestURL = 'https://jsonplaceholder.typicode.com/users';
const user = {
  name: 'User Booser', username: 'Ololo', email: 'cere@april.biz'
}

// fetch(requestURL)
//   .then(response => response.json())
//   .then(json => console.log(json))

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-type': 'application/json'
  };

  return fetch(url, {
    method,
    ...(method === 'POST' ? { body: JSON.stringify(body) } : {}),
    headers
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    return res.json().then(err => {
      const e = new Error('Error');
      e.data = err;
      throw e;
    })
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
