/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const app = require('express')();

const {
  getAllPosts
} = require('./api/posts')

app.get('/posts', getAllPosts);
exports.api = functions.https.onRequest(app);