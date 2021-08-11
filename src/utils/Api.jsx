// class Api {
//   constructor(config) {
//     this.headers = config.headers;
//     this.url = config.url;
//   }
//
//
//   getMessage() {
//     return fetch(`${this.url}`, {
//       method: 'GET',
//       headers: this.headers,
//     }).then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       return Promise.reject(`Ошибка: ${res.status}`);
//     })
//   }
//
// }
//
// export default new Api({
//   url: '../message.json',
//   headers : {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
//
// })