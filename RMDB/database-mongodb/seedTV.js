/* eslint-disable camelcase */
const db = require('./index.js');
const Tv = require('./Tv.js');

const worst = [
  {
    title: 'Red Without Blue',
    year: '2007',
    release_date: '2007-01-19',
    imdb_id: 'tt0923870',
    imdb_rating: '6.5',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTk3MzMxNDM5MV5BMl5BanBnXkFtZTcwNDM4MjQ4Mw@@._V1_SX300.jpg',
    youtube_trailer_key: 'egVybLHDHwI',
    genres: [
      'Documentary'
    ],
    stars: [
      'Clair Farley',
      'Jennie Farley',
      'Mark Oliver Farley',
      'Scott Farley',
      'David L. Suarez',
      'Jennifer Jordan'
    ],
    directors: [
      'Brooke Sebold',
      'Benita Sills',
      'Todd Sills',
      '1 more credit',
      'Brooke Sebold, Benita Sills, Todd Sills'
    ],
    countries: [
      'United States of America',
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'One Day',
    year: '2011',
    release_date: '2011-03-02',
    imdb_id: 'tt1563738',
    imdb_rating: '7.3',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTQ3NTg2MDI3NF5BMl5BanBnXkFtZTcwMjc5MTA1NA@@._V1_SX300.jpg',
    youtube_trailer_key: 'zVuuooZqVaU',
    genres: [
      'Drama',
      'Romance',
      'Action'  
    ],
    stars: [
      'Anne Hathaway',
      'Jim Sturgess',
      'Tom Mison',
      'Jodie Whittaker',
      'Rafe Spall',
      'Patricia Clarkson',
      'Ken Stott',
      'Romola Garai',
      'Matt Berry',
      'Toby Regbo'
    ],
    directors: [
      'Lone Scherfig',
      'Maj-Britt La Cour'
    ],
    countries: [
      'United States of America',
      'United Kingdom'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Masks',
    year: '2011',
    release_date: '2011-07-28',
    imdb_id: 'tt1941600',
    imdb_rating: '5.5',
    poster: 'https://m.media-amazon.com/images/M/MV5BZDBmYjRkZDUtNzQyNi00NjU0LWIyODktODIyMDY0YTM3ODQ2XkEyXkFqcGdeQXVyMTI5NzkyMA@@._V1_SX300.jpg',
    youtube_trailer_key: '5EVDIhZ1QLA',
    genres: [
      'Horror',
      'Thriller',
      'Mystery' 
    ],
    stars: [
      'Susen Ermich',
      'Julita Witt',
      'Magdalena Ritter',
      'Dieter Rita Scholl',
      'Teresa Nawrot',
      'Norbert Losch',
      'Franziska Breite',
      'Katja Lawrenz',
      'Maximilian Rüthlein',
      'Stefanie Grabner'
    ],
    directors: [
      'Andreas Marschall'
    ],
    countries: [
      'Germany'
    ],
    language: [
      'Deutsch',
      'German'
    ]
  },
  {
    title: 'Louis van Beethoven',
    year: '2020',
    release_date: '2020-10-27',
    imdb_id: 'tt1941600',
    imdb_rating: '5.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTMwODYxZDEtYTBhZC00YTdkLTlhZTQtODdmMDQ4YTJkYjlhXkEyXkFqcGdeQXVyMzA3Njg4MzY@._V1_SX300.jpg',
    youtube_trailer_key: 'mF6rtBCCCqQ',
    genres: [
      'Drama',
      'History',
      'Biography',
      'Music'
    ],
    stars: [
      'Tobias Moretti',
      'Colin Pütz',
      'Anselm Bresgott',
      'Ulrich Noethen',
      'Ronald Kukulies',
      'Cornelius Obonya',
      'Silke Bodenbender',
      'Caroline Hellwig',
      'Peter Lewys Preston',
      'Johanna Gastdorf'
    ],
    directors: [
      'Niki Stein'
    ],
    countries: [
      'Germany',
      'Austria',
      'Czech Republic'
    ],
    language: [
      'Deutsch'
    ]
  },
  {
    title: 'Endlessnessism',
    year: '2021',
    release_date: '2021-09-18',
    imdb_id: 'tt13062842',
    imdb_rating: '5.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BZTFkMjgwNTEtNTUxZC00NzYyLTkyNzQtY2I0MGU5M2U3OWFjXkEyXkFqcGdeQXVyOTQ3NTQ1NTc@._V1_SX300.jpg',
    youtube_trailer_key: '549487154',
    genres: [
      'Drama'
    ],
    stars: [
      'Dylan Julian Clark',
      'Avril Tait',
      'Anselm Bresgott',
      'Ulrich Noethen',
      'Ronald Kukulies',
      'Cornelius Obonya',
      'Silke Bodenbender',
      'Caroline Hellwig',
      'Peter Lewys Preston',
      'Johanna Gastdorf'
    ],
    directors: [
      'Liam Clark'
    ],
    countries: [
      'Germany',
      'Austria',
      'Czech Republic'
    ],
    language: [
      'Deutsch'
    ]
  },
  {
    title: 'The Gunfight at Dodge City',
    year: '1959',
    release_date: '1959-05-01',
    imdb_id: 'tt0051688',
    imdb_rating: '5.2',
    poster: 'https://m.media-amazon.com/images/M/MV5BYmNlYWNmYzMtYjhmMy00MzViLWExZWMtM2E4OWUyYjliN2IxXkEyXkFqcGdeQXVyNTEwNDcxNDc@._V1_SX300.jpg',
    youtube_trailer_key: 'QFx7agCRAZc',
    genres: [
      'Action',
      'Western'
    ],
    stars: [
      'Joel McCrea',
      'Julie Adams',
      'John McIntire',
      'Richard Anderson',
      'Nancy Gates',
      'James Westerfield',
      'Walter Coy',
      'Don Haggerty',
      'Wright King',
      'Harry Lauter'
    ],
    directors: [
      'Joseph M. Newman'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Paradise or Oblivion',
    year: '2012',
    release_date: '2012-01-01',
    imdb_id: 'tt2355775',
    imdb_rating: '6.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BYTYxNjA4MjMtYjQ4Zi00YTM3LWE1ZTgtZmEyMGNkZDdjYWZhXkEyXkFqcGdeQXVyNDA5Mjg5MjA@._V1_SX300.jpg',
    youtube_trailer_key: 'Ip_ElRKNTUQ',
    genres: [
      'Documentary'
    ],
    stars: [
      'Jacque Fresco',
      'Roxanne Meadows'
    ],
    directors: [
      'Roxanne Meadows'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Boogie',
    year: '2009',
    release_date: '2009-10-22',
    imdb_id: 'tt1235827',
    imdb_rating: '6',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTkxNjkzMTA3NV5BMl5BanBnXkFtZTcwNjY0MjE3Mg@@._V1_SX300.jpg',
    youtube_trailer_key: 'SIjExs4VhEc',
    genres: [
      'Action',
      'Animation',
      'Crime',
      'Thriller'
    ],
    stars: [
      'Pablo Echarri',
      'Nancy Dupláa',
      'Nicolás Frías',
      'Marcelo Armand',
      'Jesús Ochoa',
      'Rufino Gallo',
      'Diego Brizzi',
      'Ricardo Alanis',
      'Luciana Falcón',
      'Karin Zavala'
    ],
    directors: [
      'Gustavo Cova'
    ],
    countries: [
      'Argentina',
      'Mexico'
    ],
    language: [
      'Español'
    ]
  },
  {
    title: 'Zátopek',
    year: '2021',
    release_date: '2021-08-26',
    imdb_id: 'tt4806220',
    imdb_rating: '7.5',
    poster: 'https://m.media-amazon.com/images/M/MV5BMmY4NjM5ZDMtYjRkMi00ODBmLWE4NTQtYWEzZmZkZjQ3YzRlXkEyXkFqcGdeQXVyMDU3ODM5Mg@@._V1_SX300.jpg',
    youtube_trailer_key: 'MAPW-j-c99c',
    genres: [
      'Drama'
    ],
    stars: [
      'Václav Neužil',
      'Martha Issová',
      'James Frecheville',
      'Robert Mikluš',
      'Gabriel Andrews',
      'Sinéad Phelps',
      'Sean Brodeur',
      'Anna Schmidtmajerová',
      'Filipp Mogilnitskiy',
      'Roy McCrerey'
    ],
    directors: [
      'David Ondříček'
    ],
    countries: [
      'Czech Republic',
      'Slovakia'
    ],
    language: [
      'English',
      'Český'
    ]
  },
  {
    title: 'Nothing for Mahala',
    year: '2013',
    release_date: '2013-10-04',
    imdb_id: 'tt3013148',
    imdb_rating: '8',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTk4NDQ4MzM0Nl5BMl5BanBnXkFtZTcwNDY3MTM5OQ@@._V1_SX300.jpg',
    youtube_trailer_key: 'MAPW-j-c99c',
    genres: [
      'Comedy'
    ],
    stars: [
      'Marius Weyers',
      'Thapelo Mokoena',
      'Mmabatho Montsho',
      'Jamie Bartlett',
      'Shoki Mokgapa',
      'Rapulana Seiphemo',
      'Warren Masemola',
      'Casper De Vries',
      'Felicia Mahambehlala',
      'Annabel Linder'
    ],
    directors: [
      'Rolie Nikiwe'
    ],
    countries: [
      'South Africa'
    ],
    language: [
      'English',
      'English, Afrikaans'
    ]
  },
  {
    title: 'Red Without Blue',
    year: '2007',
    release_date: '2007-01-19',
    imdb_id: 'tt0923870',
    imdb_rating: '6.5',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTk3MzMxNDM5MV5BMl5BanBnXkFtZTcwNDM4MjQ4Mw@@._V1_SX300.jpg',
    youtube_trailer_key: 'egVybLHDHwI',
    genres: [
      'Documentary'
    ],
    stars: [
      'Clair Farley',
      'Jennie Farley',
      'Mark Oliver Farley',
      'Scott Farley',
      'David L. Suarez',
      'Jennifer Jordan'
    ],
    directors: [
      'Brooke Sebold',
      'Benita Sills',
      'Todd Sills',
      '1 more credit',
      'Brooke Sebold, Benita Sills, Todd Sills'
    ],
    countries: [
      'United States of America',
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'One Day',
    year: '2011',
    release_date: '2011-03-02',
    imdb_id: 'tt1563738',
    imdb_rating: '7.3',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTQ3NTg2MDI3NF5BMl5BanBnXkFtZTcwMjc5MTA1NA@@._V1_SX300.jpg',
    youtube_trailer_key: 'zVuuooZqVaU',
    genres: [
      'Drama',
      'Romance',
      'Action'  
    ],
    stars: [
      'Anne Hathaway',
      'Jim Sturgess',
      'Tom Mison',
      'Jodie Whittaker',
      'Rafe Spall',
      'Patricia Clarkson',
      'Ken Stott',
      'Romola Garai',
      'Matt Berry',
      'Toby Regbo'
    ],
    directors: [
      'Lone Scherfig',
      'Maj-Britt La Cour'
    ],
    countries: [
      'United States of America',
      'United Kingdom'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Masks',
    year: '2011',
    release_date: '2011-07-28',
    imdb_id: 'tt1941600',
    imdb_rating: '5.5',
    poster: 'https://m.media-amazon.com/images/M/MV5BZDBmYjRkZDUtNzQyNi00NjU0LWIyODktODIyMDY0YTM3ODQ2XkEyXkFqcGdeQXVyMTI5NzkyMA@@._V1_SX300.jpg',
    youtube_trailer_key: '5EVDIhZ1QLA',
    genres: [
      'Horror',
      'Thriller',
      'Mystery' 
    ],
    stars: [
      'Susen Ermich',
      'Julita Witt',
      'Magdalena Ritter',
      'Dieter Rita Scholl',
      'Teresa Nawrot',
      'Norbert Losch',
      'Franziska Breite',
      'Katja Lawrenz',
      'Maximilian Rüthlein',
      'Stefanie Grabner'
    ],
    directors: [
      'Andreas Marschall'
    ],
    countries: [
      'Germany'
    ],
    language: [
      'Deutsch',
      'German'
    ]
  },
  {
    title: 'Louis van Beethoven',
    year: '2020',
    release_date: '2020-10-27',
    imdb_id: 'tt1941600',
    imdb_rating: '5.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTMwODYxZDEtYTBhZC00YTdkLTlhZTQtODdmMDQ4YTJkYjlhXkEyXkFqcGdeQXVyMzA3Njg4MzY@._V1_SX300.jpg',
    youtube_trailer_key: 'mF6rtBCCCqQ',
    genres: [
      'Drama',
      'History',
      'Biography',
      'Music'
    ],
    stars: [
      'Tobias Moretti',
      'Colin Pütz',
      'Anselm Bresgott',
      'Ulrich Noethen',
      'Ronald Kukulies',
      'Cornelius Obonya',
      'Silke Bodenbender',
      'Caroline Hellwig',
      'Peter Lewys Preston',
      'Johanna Gastdorf'
    ],
    directors: [
      'Niki Stein'
    ],
    countries: [
      'Germany',
      'Austria',
      'Czech Republic'
    ],
    language: [
      'Deutsch'
    ]
  },
  {
    title: 'Endlessnessism',
    year: '2021',
    release_date: '2021-09-18',
    imdb_id: 'tt13062842',
    imdb_rating: '5.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BZTFkMjgwNTEtNTUxZC00NzYyLTkyNzQtY2I0MGU5M2U3OWFjXkEyXkFqcGdeQXVyOTQ3NTQ1NTc@._V1_SX300.jpg',
    youtube_trailer_key: '549487154',
    genres: [
      'Drama'
    ],
    stars: [
      'Dylan Julian Clark',
      'Avril Tait',
      'Anselm Bresgott',
      'Ulrich Noethen',
      'Ronald Kukulies',
      'Cornelius Obonya',
      'Silke Bodenbender',
      'Caroline Hellwig',
      'Peter Lewys Preston',
      'Johanna Gastdorf'
    ],
    directors: [
      'Liam Clark'
    ],
    countries: [
      'Germany',
      'Austria',
      'Czech Republic'
    ],
    language: [
      'Deutsch'
    ]
  },
  {
    title: 'The Gunfight at Dodge City',
    year: '1959',
    release_date: '1959-05-01',
    imdb_id: 'tt0051688',
    imdb_rating: '5.2',
    poster: 'https://m.media-amazon.com/images/M/MV5BYmNlYWNmYzMtYjhmMy00MzViLWExZWMtM2E4OWUyYjliN2IxXkEyXkFqcGdeQXVyNTEwNDcxNDc@._V1_SX300.jpg',
    youtube_trailer_key: 'QFx7agCRAZc',
    genres: [
      'Action',
      'Western'
    ],
    stars: [
      'Joel McCrea',
      'Julie Adams',
      'John McIntire',
      'Richard Anderson',
      'Nancy Gates',
      'James Westerfield',
      'Walter Coy',
      'Don Haggerty',
      'Wright King',
      'Harry Lauter'
    ],
    directors: [
      'Joseph M. Newman'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Paradise or Oblivion',
    year: '2012',
    release_date: '2012-01-01',
    imdb_id: 'tt2355775',
    imdb_rating: '6.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BYTYxNjA4MjMtYjQ4Zi00YTM3LWE1ZTgtZmEyMGNkZDdjYWZhXkEyXkFqcGdeQXVyNDA5Mjg5MjA@._V1_SX300.jpg',
    youtube_trailer_key: 'Ip_ElRKNTUQ',
    genres: [
      'Documentary'
    ],
    stars: [
      'Jacque Fresco',
      'Roxanne Meadows'
    ],
    directors: [
      'Roxanne Meadows'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Boogie',
    year: '2009',
    release_date: '2009-10-22',
    imdb_id: 'tt1235827',
    imdb_rating: '6',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTkxNjkzMTA3NV5BMl5BanBnXkFtZTcwNjY0MjE3Mg@@._V1_SX300.jpg',
    youtube_trailer_key: 'SIjExs4VhEc',
    genres: [
      'Action',
      'Animation',
      'Crime',
      'Thriller'
    ],
    stars: [
      'Pablo Echarri',
      'Nancy Dupláa',
      'Nicolás Frías',
      'Marcelo Armand',
      'Jesús Ochoa',
      'Rufino Gallo',
      'Diego Brizzi',
      'Ricardo Alanis',
      'Luciana Falcón',
      'Karin Zavala'
    ],
    directors: [
      'Gustavo Cova'
    ],
    countries: [
      'Argentina',
      'Mexico'
    ],
    language: [
      'Español'
    ]
  },
  {
    title: 'Zátopek',
    year: '2021',
    release_date: '2021-08-26',
    imdb_id: 'tt4806220',
    imdb_rating: '7.5',
    poster: 'https://m.media-amazon.com/images/M/MV5BMmY4NjM5ZDMtYjRkMi00ODBmLWE4NTQtYWEzZmZkZjQ3YzRlXkEyXkFqcGdeQXVyMDU3ODM5Mg@@._V1_SX300.jpg',
    youtube_trailer_key: 'MAPW-j-c99c',
    genres: [
      'Drama'
    ],
    stars: [
      'Václav Neužil',
      'Martha Issová',
      'James Frecheville',
      'Robert Mikluš',
      'Gabriel Andrews',
      'Sinéad Phelps',
      'Sean Brodeur',
      'Anna Schmidtmajerová',
      'Filipp Mogilnitskiy',
      'Roy McCrerey'
    ],
    directors: [
      'David Ondříček'
    ],
    countries: [
      'Czech Republic',
      'Slovakia'
    ],
    language: [
      'English',
      'Český'
    ]
  },
  {
    title: 'Nothing for Mahala',
    year: '2013',
    release_date: '2013-10-04',
    imdb_id: 'tt3013148',
    imdb_rating: '8',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTk4NDQ4MzM0Nl5BMl5BanBnXkFtZTcwNDY3MTM5OQ@@._V1_SX300.jpg',
    youtube_trailer_key: 'MAPW-j-c99c',
    genres: [
      'Comedy'
    ],
    stars: [
      'Marius Weyers',
      'Thapelo Mokoena',
      'Mmabatho Montsho',
      'Jamie Bartlett',
      'Shoki Mokgapa',
      'Rapulana Seiphemo',
      'Warren Masemola',
      'Casper De Vries',
      'Felicia Mahambehlala',
      'Annabel Linder'
    ],
    directors: [
      'Rolie Nikiwe'
    ],
    countries: [
      'South Africa'
    ],
    language: [
      'English',
      'English, Afrikaans'
    ]
  }
];

const insertWorst = function() {
  Tv.create(worst)
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