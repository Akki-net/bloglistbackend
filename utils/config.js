require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = 'mongodb+srv://fullstack:Aka%401997@cluster0.by5qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = {PORT, MONGODB_URI}