/* eslint-disable linebreak-style */
const { db } = require("../utils/admin");

exports.getAllBlogs = (request, response) => {
  db.collection("blogs")
    .get()
    .then((data) => {
      let posts = [];
      data.forEach((doc) => {
        posts.push({
          id: doc.id,
        });
      });
      return response.json(posts);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};
