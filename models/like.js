const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    like: Boolean
});

module.exports = mongoose.model('Like', likeSchema)