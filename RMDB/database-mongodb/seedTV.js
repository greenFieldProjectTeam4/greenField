/* eslint-disable camelcase */
const db = require('./index.js');
const Video = require('./video.js');

const worst = [
  {
    title: 'Aladdin',
    year: '2019',
    release_date: '2023-07-14',
    imdb_id: 'tt11779248',
    imdb_rating: '0',
    poster: 'https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg',
    vote_count: '0',
    popularity: '3.429',
    youtube_trailer_key: 'aKXex7b1Ew',
    rated: 'PG-13',
    genres: [ 
      'Fantasy',
      'Family',
      'Adventure',
      
    ],
    stars: [
      'Dennis Quaid',
      'Meagan Good',
      'Michael Ealy'
    ],
    directors: [
      'Guy Ritchie'
    ],
    countries: ['United States of America'
    ],
    language: [
      'English',
    ]
  },
  {
    title: 'Bad Blood',
    year: '2017',
    release_date: '07 Dec 2018',
    poster: 'https://m.media-amazon.com/images/M/MV5BMzRmNzZkMmMtMzU5YS00ZThhLWE2YzItZTNhNGMwMmI1MjQyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    imdb_id: 'tt5795144',
    imdb_rating: '6.8',
    vote_count: '90',
    popularity: '7.913',
    youtube_trailer_key: '',
    genres: [
      'Drama',
      'Crime'
    ],
    stars: [
      'Jennifer Lawrence',
      'Mike Gassaway'  
    ],
    directors: [
      'Adam McKay'
    ],
    countries: [
      'Germany',
      'Italy',
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'The Intruder',
    year: '2019',
    release_date: '2019-05-03',
    imdb_id: 'tt6722030',
    imdb_rating: '6.2',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTczMzc4NDY0MF5BMl5BanBnXkFtZTgwMjI3Njg3NjM@._V1_SX300.jpg',
    vote_count: '297',
    popularity: '19.372',
    youtube_trailer_key: 'aKXvex7b1Ew',
    rated: 'PG-13',
    genres: [ 
      'Thriller',
      'Drama',
      'Horror',
      'Mystery',
    ],
    stars: [
      'Dennis Quaid',
      'Meagan Good',
      'Michael Ealy',
      'Joseph Sikora',
      'Alvina August',
      'Lili Sepe',
      'Kurt Evans',
      'Debs Howard',
      'Lee Shorten',
      'Carolyn Anderson',
      'Erica Cerra',
      'Raylene Harewood',
      'Caroline Muthoni Muita',
      'Connor Mackay',
      'John Torrance',
      'Mary Elise Torrance',
    ],
    directors: [
      'Deon Taylor'
    ],
    countries: ['United States of America'
    ],
    language: [
      'English',
      'en',
    ]
  },
  {
    title: 'A Quiet Life',
    year: '2010',
    release_date: '2010-11-05',
    imdb_id: 'tt1521090',
    imdb_rating: '6.5',
    poster: 'https://upload.wikimedia.org/wikipedia/en/e/e2/A_Quiet_Life.jpg',
    vote_count: '90',
    popularity: '7.913',
    youtube_trailer_key: '',
    genres: [
      'Drama',
      'Crime'
    ],
    stars: [
      'Toni Servillo',
      'Marco D\'Amore',
      'Francesco Di Leva',
      'Juliane Köhler',
      'Leonardo Sprengler',
      'Alice Dwyer',
      'Maurizio Donadoni',
      'Micki Bertling',
      'Ulrich Cyran',
      'Nick Dong-Sik',
      'Joachim Kretzer',
      'Giovanni Ludeno',
      'Edoardo Melone',
      'Franco Melone',
      'Daniel Roesner',
      'Enzo Salomone',
      'Lucia Schlör',
      'Hildburg Schmidt',
      'Andreas Wellano',
      'Hans-Joachim Heist',
      'Irmtraud Hetz',
      'Peter Sablic',
      'Yalcin Bögürkü',
      'Tina Klein',
      'Frank M. Ahearn',
      'Eilean Roland',
    ],
    'directors': [
      'Claudio Cupellini'
    ],
    'countries': [
      'Germany',
      'Italy',
      'France',
      'Italy, France, Germany'
    ],
    'language': [
      'Deutsch',
      'English',
      'Italiano',
      'Italian, German, Neapolitan, English'
    ]
  },
  {
    title: 'Jurassic World: Dominion',
    year: '2022',
    release_date: '2022-06-09',
    imdb_id: 'tt8041270',
    imdb_rating: '7.29167',
    vote_count: '48',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDhkODhmZjEtMmE5My00MTE1LTllZGItMDkwOTZlMjY1ZWUyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    popularity: '32.399',
    youtube_trailer_key: '',
    rated: 'Action, Adventure, Sci-Fi ',
    runtime: 90,
    genres: [
      'Adventure',
      'Action',
      'Sci-Fi',
      'Thriller'
    ],
    stars: [
      'Chris Pratt',
      'Bryce Dallas Howard',
      'Laura Dern',
      'Jeff Goldblum',
      'Mamoudou Athie',
      'Scott Haze',
      'Dichen Lachman',
      'Sam Neill',
      'Daniella Pineda',
      'Campbell Scott'
    ],
    directors: [
      'Colin Trevorrow'
    ],
    countries: [
      'United States of America'
    ],
    'language': [
      'English'
    ]
  },
  {
    title: 'The Three Wise Men',
    year: '2020',
    release_date: '2020-11-27',
    imdb_id: 'tt13319946',
    imdb_rating: '7.5',
    poster: 'https://m.media-amazon.com/images/M/MV5BYzk3NjZmZWMtN2YyYS00ZThhLTk4YjEtYmFkNDk3ZTA1NDA4XkEyXkFqcGdeQXVyODMyNDE3MTI@._V1_SX300.jpg',
    vote_count: '2',
    popularity: '2.168',
    youtube_trailer_key: 'dyJJv-n4xoE',
    genres: [
      'Family',
      'History',
      'Action',
      'Short',
    ],
    stars: [
      'Andy Griffith'
    ],
    directors: [
      'Yarrow Cheney',
      'Carrie Cheney'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English',
      'en'
    ]
  },
  {
    title: 'The Bad Guys',
    year: '2022',
    release_date: '2022-04-08',
    imdb_id: 'tt8115900',
    imdb_rating: '0',
    vote_count: '0',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTExNTEzMzM3OTNeQTJeQWpwZ15BbWU4MDY2OTI1OTYx._V1_SX300.jpg',
    popularity: '4.193',
    youtube_trailer_key: '',
    rated: 'Animation, Action, Comedy ',
    runtime: 90,
    genres: [
      'Animation',
      'Action',
      'Comedy'
    ],
    stars: [
      'Sam Rockwell',
      'Craig Robinson',
      'Awkwafina',
      'Marc Maron'
    ],
    directors: [
      'Pierre Pierfel',
      'Roger Allers',
      'Pierre Perifel',
      '2 more credits'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  }, 
  {
    title: 'People You May Know',
    year: '2016',
    release_date: '2016-07-07',
    imdb_id: 'tt4696310',
    imdb_rating: '5.7',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjZkZTU0ODktYjhjNi00YWNlLTljYjgtOTBjNzZjZGMxMDVlXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SX300.jpg',
    vote_count: '19',
    popularity: '3.72',
    youtube_trailer_key: 'wOVZb_jJ0_g',
    genres: [
      'Comedy',
      'Drama',
    ],
    stars: [
      'Sean Maher',
      'Andrea Grano',
      'Mark Cirillo',
      'Lauren C. Mayhew',
      'Nacho San José',
      'Curt Hansen',
      'Trey McCurley',
      'Jimmy Shaw',
      'Nelly Castillo',
      'Deborah Domínguez',
      'Tara Karsian',
      'Frederick Keeve',
      'David Krohnert',
      'Connor Linnerooth',
      'Louis Macarthur',
      'Sergio Macian',
      'Carmen Maura',
      'Rafael I. Molina',
      'Raymond Rivera III',
      'Amor Sanchez',
      'Karl Schott',
      'Isabel Serrano',
      'Nikos Siozos',
      'David Vega',
      'Cynthia Webster',
      'Jessica B. Wellington',
    ],
    directors: [
      'J.C. Falcón'
    ],
    countries: [
      'USA, Spain'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Blood Moon River',
    year: '2017',
    release_date: '2017-04-22',
    imdb_id: 'tt5925370',
    imdb_rating: '2',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc1NDg4YWMtZDdlMS00NTdlLTljZDQtNGRkZTIxZTZlNTI4XkEyXkFqcGdeQXVyMTU5MjIyMTI@._V1_SX300.jpg',
    vote_count: '1',
    youtube_trailer_key: 'St3J3GHEDNA',
    genres: [
      'Horror'
    ],
    stars: [
      'Daniel Murphy',
      'Tom Komisar',
      'Jack Norman',
      'R.J. Cecott',
      'Rebekah Erb',
      'Sydney Dean',
      'Tony Walters',
      'Cameron Scott',
      'Lindsey McIntire',
      'Edward Diersen',
      'Stan Traylor',
      'James Michael',
      'Naphatia St Pierre',
      'Sara Ingram',
      'Eric Reaume',
      'Cara McConnell',
      'Linda Schrader',
    ],
    directors: [
      'R.J. Cecott',
      'Tom Komisar',
      'Daniel Murphy',
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English',
      'en'
    ]
  },{
    title: 'Red Sun',
    year: '1971',
    release_date: '1971-09-15',
    imdb_id: 'tt0067770',
    imdb_rating: '6.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTMwNDgyNDItOTYzZi00MjhmLTgyYzItYjNiY2Y5NGY2YWY4XkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg',
    youtube_trailer_key: 'r1iC4ids4v8',
    'genres': [
      'Western',
      'Action'
    ],
    'stars': [
      'Charles Bronson',
      'Ursula Andress',
      'Toshirō Mifune',
      'Alain Delon',
      'Capucine',
      'Barta Barri',
      'Guido Lollobrigida',
      'Anthony Dawson',
      'Gianni Medici',
      'Georges Lycan',
      'Luc Merenda',
      'Tetsu Nakamura'
    ],
    directors: [
      'Terence Young',
      'Joan Davis',
      'Ricardo Huertas Frutos',
      'Christian Raoux',
      'Ricardo Huertas',
    ],
    countries: [
      'France',
      'Italy',
      'Spain',
      'France, Italy, Spain',
    ],
    language: [
      'Español',
      'English',
      '日本語',
      'English, Spanish, Japanese',
    ]
  },
];

const insertWorst = function() {
  Video.create(worst)
    .then(() => {
      console.log('Database seeded successfully');
    })
    .catch((error) => {
      console.log('error seeding the database: ', error);
    })
    .finally(() => {
      db.close();
    });
};

insertWorst();