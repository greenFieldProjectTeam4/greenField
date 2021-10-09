/* eslint-disable camelcase */
const db = require('./index.js');
const Tv = require('./Tv.js');

const worst = [
  {
    title: 'Tarung Sarung',
    year: '2020',
    release_date: '2020-12-31',
    imdb_id: 'tt11749980',
    imdb_rating: '7.3',
    poster: 'https://m.media-amazon.com/images/M/MV5BZWM4ZmNhMjctNTA1Ni00MzVjLWJiOTQtYTUwNTY4ZGQwZmRlXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: 'AgaXQPJCRjA',
    genres: [
      'Action',
      'Drama',
      'Adventure',
    ],
    stars: [
      'Panji Zoni',
      'Yayan Ruhian',
      'Maizura',
      'Cemal Faruk',
      'Surya Saputra',
      'Jarot SuperDJ',
      'Doyok SuperDJ',
      'Annette Edoarda',
      'Imelda Therinne',
      'Hajra Romessa'
    ],
    directors: [
      'Archie Hekagery'
    ],
    countries: [
      'Indonesia'
    ],
    language: [
      'Bahasa indonesia'
    ]
  },
  {
    title: 'Harry and Walter Go to New York',
    year: '1976',
    release_date: '1976-06-17',
    imdb_id: 'tt0074608',
    imdb_rating: '6.4',
    poster: 'https://m.media-amazon.com/images/M/MV5BYzVhMGJjNTUtYzg2Ny00OTU5LTgwYWQtZjlkNTcwMTJiZDJkL2ltYWdlXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: '-ZDvhYsm2as',
    genres: [
      'Crime',
      'Comedy'
    ],
    stars: [
      'Elliott Gould',
      'James Caan',
      'Diane Keaton',
      'Michael Caine',
      'Charles Durning',
      'Lesley Ann Warren',
      'Val Avery',
      'Jack Gilford',
      'Dennis Dugan',
      'Carol Kane'
    ],
    directors: [
      'Mark Rydell'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'Español',
      'Deutsch',
      'English'
    ]
  },
  {
    title: 'Harry and Walter Go to New York',
    year: '1988',
    release_date: '1988-12-23',
    imdb_id: 'tt0143952',
    imdb_rating: '3.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BNTliYThhZDEtNThkOS00NjZjLWE0ODktN2FiZmQ1YTg2NTkzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: 'kk5WdVQj9Ro',
    genres: [
      'Drama',
      'Horror',
      'Thriller'
    ],
    stars: [
      'Alex Kubik',
      'Elizabeth Kent',
      'Cameron Mitchell',
      'Mark Witsken',
      'Sullivan Hester',
      'Michael Nash',
      'Laura Kalison',
      'Paul Dean',
      'Jay Leggett',
      'Randolph Powell'
    ],
    directors: [
      'Leszek Burzynski'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Shopping',
    year: '1994',
    release_date: '1994-12-06',
    imdb_id: 'tt0111173',
    imdb_rating: '5.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BNjVlN2MzYTYtNzEyMy00YTI0LWFiMGYtZmJmOTBhZDgzYTM5XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: 'cR1Zvw5MmLs',
    genres: [
      'Action',
      'Adventure',
      'Drama',
      'Sci-Fi',
      'Thriller',
      'Crime'
    ],
    stars: [
      'Sadie Frost',
      'Jude Law',
      'Sean Pertwee',
      'Fraser James',
      'Sean Bean',
      'Marianne Faithfull',
      'Jonathan Pryce',
      'Ralph Ineson',
      'Eamonn Walker',
      'Lee Whitlock'
    ],
    directors: [
      'Paul W. S. Anderson'
    ],
    countries: [
      'United Kingdom',
      'UK, Japan'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Robot & Frank',
    year: '2012',
    release_date: '2012-08-16',
    imdb_id: 'tt1990314',
    imdb_rating: '6.9',
    poster: '"https://m.media-amazon.com/images/M/MV5BMTUzMTE0NTk4Ml5BMl5BanBnXkFtZTcwNjQ1OTMwOA@@._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: 'a_gAJk_CfPI',
    genres: [
      'Action',
      'Comedy',
      'Drama',
      'Sci-Fi',
      'Sci-Fi',
      'Crime'
    ],
    stars: [
      'Frank Langella',
      'Liv Tyler',
      'James Marsden',
      'Susan Sarandon',
      'Peter Sarsgaard',
      'Jeremy Strong',
      'Jeremy Sisto',
      'Bonnie Bentley',
      'Dario Barosso',
      'Rachael Ma'
    ],
    directors: [
      'Jake Schreier'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Koch Brothers Exposed',
    year: '2012',
    release_date: '2012-03-07',
    imdb_id: 'tt2347411',
    imdb_rating: '6.5',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTM3NDQ2MDQwMV5BMl5BanBnXkFtZTcwNjUxMDc3Nw@@._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: 'zc_3wsLd01s',
    genres: [
      'Documentary'
    ],
    stars: [
      'Bernie Sanders',
      'Van Jones',
      'Bill McKibben',
      'Jim Hightower',
      'Katrina vanden Heuvel',
      'Charles G. Koch',
      'David H. Koch',
      'Fred C. Koch',
      'Lawrence Lessig',
    ],
    directors: [
      'Robert Greenwald'
    ],
    countries: [
      'United States of America'],
    title: 'L.A. Superheroes',
    year: '2013',
    release_date: '2013-11-08',
    imdb_id: 'tt2515476',
    imdb_rating: '7.5',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTM4MzYxNTUxMV5BMl5BanBnXkFtZTcwNzA3MDY0OQ@@._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: 'U596XawbqX0',
    genres: [
      'Comedy',
      'Drama'
    ],
    stars: [
      'Yelena Popovic',
      'Alexander Zisiades',
      'Craig Archibald',
      'Alejandra Bursik-Cervantes',
      'Catherine Carlen',
      'T.J. Castronovo',
      'Tsulan Cooper'
    ],
    directors: [
      'Yelena Popovic',
      'Alexandros Potter'],
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
    title: 'Uninhabited',
    year: '2010',
    release_date: '2010-05-14',
    imdb_id: 'tt1459013',
    imdb_rating: '4.4',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjE2NjIyNTgxNF5BMl5BanBnXkFtZTcwODE4Njc3Mw@@._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: 'gdmg5nm2iCM',
    genres: [
      'Thriller',
      'Horror'
    ],
    stars: [
      'Geraldine Hakewill',
      'Bob Baines',
      'Tasia Zalar',
      'Henry James',
      'Billy Milionis',
      'Terry Siourounis'
    ],
    directors: [
      'Bill Bennett'
    ],
    countries: [
      'Australia'
    ],
    language: [
      'English',
      'Deutsch'
    ]
  },
  {
    title: 'Alpha Dog',
    year: '2006',
    release_date: '2006-01-27',
    imdb_id: 'tt0426883',
    imdb_rating: '6.7',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjExODMyNzQzMl5BMl5BanBnXkFtZTYwNzMwNTg3._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: 'SPbwocBe_tQ',
    genres: [
      'Crime',
      'Drama',
      'History',
      'Thriller',
      'Action'
    ],
    stars: [
      'Emile Hirsch',
      'Bruce Willis',
      'Amanda Seyfried',
      'Justin Timberlake',
      'Shawn Hatosy',
      'Ben Foster',
      'Harry Dean Stanton',
      'Matthew Barry',
      'Fernando Vargas',
      'Vincent Kartheiser'
    ],
    directors: [
      'Nick Cassavetes',
      'Jeanne Byrd'
    ],
    countries: [
      'United States of America',
      'Germany'
    ],
    language: [
      'English',
      'Český',
      'Español'
    ]
  },
  {
    title: 'My Friend, Tucker',
    year: '2019',
    release_date: '2019-03-03',
    imdb_id: 'tt7972040',
    imdb_rating: '8.2',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDc2NzQ2NmUtMDI2NC00MzNjLWI3OGItODM1MGQwM2QxZGZkXkEyXkFqcGdeQXVyNTExNjA1MzE@._V1_SX300.jpg',
    vote_count: '5',
    youtube_trailer_key: 'uApF4dWsUn0',
    genres: [
      'Comedy',
      'Drama'
    ],
    stars: [
      'Avery Anthony',
      'Mitchell Edwards'
    ],
    directors: [
      'Clarence Williams IV'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
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