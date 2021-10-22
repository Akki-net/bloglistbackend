require('dotenv').config();

exports.PORT = process.env.PORT;
exports.MONGODB_URI = process.env.NODE_ENV === 'test' 
? process.env.TEST_MONGODB_URI
: process.env.MONGODB_URI
