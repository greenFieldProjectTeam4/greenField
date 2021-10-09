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
    description: "When a young married couple (Michael Ealy and Meagan Good) buys their dream house in the Napa Valley, they think they have found the perfect home to take their next steps as a family. But when the strangely attached seller (Dennis Quaid) continues to infiltrate their lives, they begin to suspect that he has hidden motivations beyond a quick sale.",
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
    youtube_trailer_key: '0gZD-beTuZo',
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
    description:"An alternative perspective on migration depicted through a gallery of portraits of a not so quiet daily life in Kavala, a small town in Northern Greece. An ageing local community juxtaposed with a young refugee family residing in the town because of a distant war. While silently contemplating on the past and patiently waiting for the future to come, they are all living a normal, seemingly quiet life.",
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
    poster: 'https://m.media-amazon.com/images/M/MV5BMGExZjNhNTktMTAxOS00MjRmLTk3NTgtZGEyMjViOTEyM2Q3XkEyXkFqcGdeQXVyMjkyNDY5Mzc@._V1_.jpg',
    vote_count: '43',
    popularity: '0.6',
    youtube_trailer_key: '7VSdFCH2VUo',
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
    description:" After We Collided is a 2020 American romantic drama film directed by Roger Kumble and written by Anna Todd and Mario Celaya. It is based on the 2014 new adult fiction novel of the same name by Todd, and is the sequel to After (2019). The film stars Josephine Langford and Hero Fiennes Tiffin as Tessa Young and Hardin Scott, respectively, with Dylan Sprouse, Shane Paul McGhie, Candice King, Khadijha Red Thunder, Inanna Sarkis, Samuel Larsen, and Selma Blair in supporting roles.",
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
    description:"Narrated by the legendary Andy Griffith (THE ANDY GRIFFITH SHOW, MATLOCK), this heartwarming animated special is a charming re-imagination of the classic Christmas story following the three wise men on a wondrous quest to meet the newborn king. Their journey is told through rhymed narration alongside a soundtrack of holiday carols performed by The Brothers Cazimero from Hawaii and the new original song Noel by the Grammy Award-winning songwriter Jonas Myrin.",
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
    description:"Joe, Delia, Rodrigo, and Herbert are very close friends in their mid 30’s. Delia and Rodrigo are married, while Joe is Delia’s ex-boyfriend who turned out to be gay. After a night of drinking, Joe and Delia sleep together and she gets pregnant. Meanwhile, Joe is in a secret online relationship with Tom. They have not met in person yet... and they never will.",
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
    description:"A group of friends try to debunk a local legend, but have they bitten off more than they can chew?",
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
    poster: 'https://m.media-amazon.com/images/M/MV5BN2M4NzAyOTgtZTUxYi00MjRjLTk1ZjgtNTI5YThkYWE2OWViXkEyXkFqcGdeQXVyMjg5OTIyMDk@._V1_.jpg',
    imdb_rating: '7.1',
    youtube_trailer_key: 'P11MroggtPo',
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
    description:"A cynical college professor takes a keen interest in a talented young writing student.",
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
    description:"IN THEATERS & ON DEMAND AUGUST 3rd! A former US special forces soldier is reluctantly appointed to protect a group of millionaires who want to experience the thrills of war first-hand. But when their excursion goes horribly awry, the unlikely team must band together in order to get out alive. Starring Christian Slater, Ving Rhames, Dominic Monaghan, Sean Bean and James Cromwell.",
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
    description:"The story takes place in Arizona, around 1870. Link and Gotch are two ruthless robbers that attack along with their men at the train which carries the ambassador of Japan over to Washington. During the robbery, Gotch takes a very valuable gold sword, which is a gift from the emperor to the president of the U.S. and tries to kill Link, so that he can take all the money for himself.",
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
    description:"Encouraged by her lover, Danielle kills her husband and goes on the lam with her infant daughter Cali. But the cops catch her and, en route to prison, she agrees to give custody of Cali to her arch rival, her sister Nikki. But on release from prison, Danielle will stop at nothing to get Cali back from Nikki's safe and healthy home.",
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