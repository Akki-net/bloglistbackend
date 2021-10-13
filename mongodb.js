var mongoose = require('mongoose');

if(process.argv.length < 3){ 
    console.log('Enter password to enter the page with argument: node mongodb <password>')
}

var password = process.argv[2];
var author = process.argv[3];
var title = process.argv[4];
var description = process.argv[5];
var like = process.argv[6];

var url ='mongodb+srv://fullstack:'+password+'@cluster0.by5qy.mongodb.net/myDB?retryWrites=true&w=majority';

mongoose.connect(url);

var blogSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    like: Number
});

var Blog = mongoose.model('Blog', blogSchema);

var blog = new Blog({
    author : process.argv[3],
    title : process.argv[4],
    description : process.argv[5],
    like : process.argv[6]
});

if(process.argv.length == 3){
    Blog.find({})
    .then(function (list) {
            list.forEach(function (l) {
                    console.log('Author: '+l.author);
                    console.log('Title: '+l.title);
                    console.log('Descriotion: '+l.description);
                    console.log('like: '+l.like);
                });
            mongoose.connection.close();
        })
}

if(process.argv.length == 7){
    var blog = new Blog({
        author: author,
        title: title,
        description: description,
        like: like
    });
    blog.save().then(function (result) {
            console.log(result.author+'\'s blog added');
            mongoose.connection.close();
        })
}