require('dotenv').config();
const express = require('express');
const Blog =  require('./models/blog');
const cors = require('cors');
const app = express();

app.use(express.static('build'));
app.use(cors());
app.use(express.json());

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  };

app.use(requestLogger);

app.get("/api/blogs", (request, response, next) => {
    Blog.find({})
    .then(result => response.json(result))
    .catch(error => next(error))
});

app.post("/api/blogs", (request, response, next) => {
    const body = request.body;

    if(body.author=='' || body.title=='' || body.description==''){
        return response.status(204).send({ error: "missing content"})
    }

    const blog = new Blog({
        author: body.author,
        title: body.title,
        description: body.description,
        like: body.like
    });

    blog.save().then(result => response.json(result))
    .catch(error => next(error))
});

app.put("/api/blogs/:id",(request, response, next) => {
    const body = request.body;
    const blog = {
        ...body,
        like: body.like + 1
    };
    Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
    .then(result => response.json(result))
    .catch(error => next(error))
});

const unknownEndPoint = (request, response) => {
    return response.status(404).send({error: "unknown endpoint"})
};

const errorHandler = (error, request, response, next) => {
    console.error(error.message);

    if(error.name == "CastError"){
        return response.status(400).send({ error: "malformated id" })
    }
    else if(error.name == "ValidationError"){
        return response.status(400).send({error: error.message})
    }
    next(error)
};

app.use(unknownEndPoint);
app.use(errorHandler);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))