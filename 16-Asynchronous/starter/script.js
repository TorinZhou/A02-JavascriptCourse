'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `<article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 100000000
//             ).toFixed(1)} 亿人</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('cn');
// getCountryData('Canada');
// getCountryData('portugal');
// getCountryData('Japan');

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     //render contry 1
//     renderCountry(data);

//     // Get neighbour country 2
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     // AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('germany');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// const request = fetch('https://restcountries.com/v2/name/china');
// console.log(request);
// It's a promise obj
// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 100000000
//             ).toFixed(1)} 亿人</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(data.currencies)[0].name
//             }</p>
//           </div>
//         </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentHTML('beforeend', msg);
// };
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg} ${response.status}`);
//     }
//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       if (!data[0].borders) {
//         throw new Error('This country has no neighbour');
//       }
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `Neighbour country not found`
//       );
//     })
//     .then(data => {
//       console.log(data);
//       return renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 🤣🤣🤣🤣🤣`);
//       renderError(`Something went wrong 😂 ${err.message}.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });
// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// const geoSuccess = function (position) {
//   console.log(position);
//   const { latitude, longitude } = position.coords;
//   console.log(this);
//   this.reserveGeo.call(this, latitude, longitude);
// };
// const geoFail = function (e) {
//   console.log(e);
// };

// fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);

// class Api {
//   position = 1;
//   constructor() {
//     navigator.geolocation.getCurrentPosition(
//       this.geoSuccess.bind(this),
//       this.geoFail.bind(this)
//     );
//     console.log(this);
//   }
//   geoSuccess(position) {
//     const { latitude, longitude } = position.coords;
//     this.fetchData(latitude, longitude);
//   }
//   geoFail() {
//     console.log('1111111');
//   }
//   fetchData(latitude, longitude) {
//     fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
//       .then(response => {
//         console.log(response);
//         if (!response.ok)
//           throw new Error(`Something went wrong ${response.status}`);
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         this.renderPosition(data);
//       })
//       .catch(err => {
//         throw new Error(`${err.message}`);
//       });
//   }
//   renderPosition(data) {
//     console.log(`You are in ${data.city}, ${data.country}`);
//     this.getCountryData.call(this, data.country);
//   }
//   renderCountry(data, className = '') {
//     const html = `<article class="country ${className}">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 100000000
//             ).toFixed(1)} 亿人</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(data.currencies)[0].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   }

//   getCountryData(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         console.log(this);
//         this.renderCountry(data[0]);
//       });
//   }
// }

// const api = new Api();
// const aPromise = new Promise(function (res, rej) {
//   console.log(res, rej); // ƒ () { [native code] } ƒ () { [native code] }
//   console.log(this); // undefined
// });
// const lotteryPromise = new Promise(function (res, rej) {
//   console.log('Lotter draw is happening');
//   console.log(this);
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       res('You Win✨');
//     } else {
//       rej(new Error('You Loose😉'));
//     }
//   }, 2000);
// });
// console.log(lotteryPromise);
// console.dir(lotteryPromise);
// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 seconds');
//   });

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );
// // callback based API
// console.log('This will happen first');

// const getPosition = function () {
//   return new Promise(function (res, rej) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => res(position),
//     //   err => rej(err)
//     // );
//     navigator.geolocation.getCurrentPosition(res, rej);
//     // call res with the position
//     // call rej with the error
//   });
// };
// getPosition().then(res => console.log(res));

// const whereAmI = async function (country) {
//   // translate .then() to await
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res => res.json())
//     .then(res => console.log(res));
//   // await will stop the code execution at this time
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   const data = await res.json();
//   console.log(data);
// };
// whereAmI('canada');
// const aPromise = new Promise(function (res, rej) {
//   res();
//   console.log('1111111');
// });
// console.log('222222');
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};
const get3Countries = async function (url1, url2, url3) {
  try {
    // const [data1] = await getJSON(`${url1}`);
    // const [data2] = await getJSON(`${url1}`);
    // const [data3] = await getJSON(`${url1}`); // bad code.
    const data = await Promise.all([
      getJSON(`${url1}`),
      getJSON(`${url2}`),
      getJSON(`${url3}`),
    ]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
