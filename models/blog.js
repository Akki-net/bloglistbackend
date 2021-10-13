var mongoose = require('mongoose');
var config = require('../utils/config');
var logger = require('../utils/logger');
var uniqueValidator = require('mongoose-unique-validator')

logger.info('Database is going to be connected');

if(mongoose.connect(config.MONGODB_URI)){
    logger.info('Database is connected successfully!')
}
else{
    logger.info('Error is occuring in connect to Database')
}

var blogSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        minLength: 3,
    },
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    description: {
        type: String,
        required: true
    },
    like: {
        type: Number
    }
});

blogSchema.plugin(uniqueValidator);

blogSchema.set('toJSON', {
    transform : function (document, returnedObject) {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Blog', blogSchema)



