const mongoose = require('mongoose');
const url = process.env.MONGODB_URI;
const uniqueValidator = require('mongoose-unique-validator')

console.log('Database is going to be connected');

if(mongoose.connect(url)){
    console.log('Database is connected successfully!')
}
else{
    console.log('Error is occuring in connect to Database')
}

const blogSchema = new mongoose.Schema({
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
    transform : (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Blog', blogSchema)



