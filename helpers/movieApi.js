const axios = require('axios');
const API_KEY = require('../config.js').API_KEY;

// https://api.themoviedb.org/3/search/movie?api_key=d2046deae8f6b0ab307d7a2cb31ecf46&language=en-US&query=Gladiator&page=1&include_adult=false
const getMovieData = async (query) => {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  try {
    return await axios.get(url);
  } catch (error) {
    console.error('found error in get Movies', error);
  }
}

module.exports.getMovieData = getMovieData;

// const getMovieData = () => {
//   return new Promise((resolve, reject) => {
//     axios.get(...)
//       .then((results) => {
//         resolve(results)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }



// promise func that gets
// make a func that take in the result from the getMovieData func and then modify it to send in