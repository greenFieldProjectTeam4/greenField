/* eslint-disable camelcase */
const db = require('./index.js');
const Video = require('./video.js');

const random = [
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
    countries: ['United States of America'],
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
    title: 'In Your Arms',
    year: '2009',
    release_date: '2009-07-01',
    imdb_id: 'tt1320372',
    imdb_rating: '5.8',
    poster: 'https://www.imdb.com/title/tt10757444/mediaviewer/rm2124909313/',
    vote_count: '43',
    popularity: '0.6',
    youtube_trailer_key: '',
    genres: [
      'Drama'
    ],
    stars: [
      'Michèle Laroque',
      'Martin Loizillon',
      'Lola Naymark',
      'Catherine Mouchet',
      'Marc Bertolini',
      'Marie-Bénédicte Roy',
      'Mélanie Leray',
      'Mariana Ramos',
      'Antonio Ramos',
      'Salvador Douezy',
      'Bonnafet Tarbouriech',
      'Julien De Almeida'
    ],
    'directors': [
      'Hubert Gillet'
    ],
    'countries': ['France'
    ],
    language: [
      'Français',
      'French'
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
  }, {
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
  },
  {
    title: 'Submission',
    year: '2019',
    release_date: '2019-09-19',
    imdb_id: 'tt4824256',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjE3MDA2MTM1MF5BMl5BanBnXkFtZTgwMjc0NTE5ODE@._V1_SX300.jpg',
    imdb_rating: '7.1',
    youtube_trailer_key: 'CN0UhOIctBU',
    genres: [
      'Drama',
      'Sport',
    ],
    stars: [
      'Scott Pryor',
      'Darrin Henson',
      'Eric Roberts',
      'Lorynn York',
      'Kevin Sizemore',
      'Sara McMann',
      'Lunden De\'Leon',
      'Ovince Saint Preux',
      'John Gray',
      'Adam Minarovich',
      'Lauren York',
      'Darrin Dewitt Henson',
      'Dixie Light',
      'Lawrence Gilligan',
      'Micah Pryor',
      'Danny Williams-Lopez',
      'J Randall'
    ],
    directors: [
      'J.M. Berrios'
    ],
    countries: [
      'United States of America',
      'USA'
    ],
    language: [
      'English',
      'en'
    ],
  },
  {
    title: 'Soldier of Fortune',
    year: '1955',
    release_date: '1955-01-01',
    imdb_id: 'tt0048640',
    imdb_rating: '5.6',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDcyYzA2NGItYzNlOS00NzY0LWEzZmUtMzIxYjQxNWYzODRkXkEyXkFqcGdeQXVyNTU3MTY2Mg@@._V1_SX300.jpg',
    youtube_trailer_key: 'Ye_XCOoAdxU',
    'genres': [
      'Adventure',
      'Drama',
      'Action',
      'Romance',
      'Crime',
      'Thriller'
    ],
    stars: [
      'Clark Gable',
      'Susan Hayward',
      'Michael Rennie',
      'Gene Barry',
      'Tom Tully',
      'Alexander D\'Arcy',
      'Anna Sten',
      'Leo Gordon',
      'Jack Kruschen',
      'James Hong',
    ],
    directors: [
      'Edward Dmytryk'
    ],
    countries: [
      'United States of America',
      'USA'
    ],
    language: [
      'English',
      'en'
    ]
  },
  {
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
  {
    title: 'A Mother\'s Crime',
    year: '2017',
    release_date: '2017-08-21',
    imdb_id: 'tt7444708',
    imdb_rating: '6.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BM2FkZmI4ZWYtNTZlYy00YjBlLWE1OWItNjNlOTQ3ZGQ0NTMxXkEyXkFqcGdeQXVyNzY4ODc3OTA@._V1_SX300.jpg',
    youtube_trailer_key: '2TxoDMfZudM',
    genres: [
      'Thriller',
      'TV Movie'
    ],
    stars: [
      'Jenny Gabrielle',
      'April Bowlby',
      'Amber Lynn Ashley',
      'Ryan Jason Cook',
      'J.D. Garfield',
      'Allyson Harbert',
      'Matt Page',
      'Brytnee Ratledge',
      'Matthew Van Wettering',
      'Arina Gancicova'
    ],
    directors: [
      'Farhad Mann',
      'Lora Martinez-Cunningham',
      'Amber LeRae Earls',
    ],
    countries: [
      'United States of America',
      'USA'
    ],
    language: [
      'English'
    ]
  }
];

const insertRandom = function() {
  Video.create(random)
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

insertRandom();