/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
const config = require('../my-blog-app-da863-firebase-adminsdk-onoas-c130ef3968.json')
const admin = require("firebase-admin");
admin.initializeApp(config);

const db = admin.firestore();

module.exports = {admin, db};
