const db  = require('./index.js');
const Blog = require('./Blog.js');

const samplePosts = [
 
];

const insertSampleBlogs = function() {
  Blog.create(samplePosts)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};


insertSampleBlogs();