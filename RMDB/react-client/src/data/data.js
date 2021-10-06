const recent = [];
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
  params: {type: 'get-random-movies', page: '3'},
  headers: {
    'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
    'x-rapidapi-key': 'b42ed9aa67msh415cc3ad5056b9ap179852jsn8a654de1e640'
  }
};

axios.request(options).then(function (response) {
  recent.push(response.data);
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});