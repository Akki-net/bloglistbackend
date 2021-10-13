const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get("/", (request, response) => {
    Blog.find({})
    .then(result => response.json(result))
});

blogsRouter.post("/", (request, response, next) => {
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

blogsRouter.put("/:id",(request, response, next) => {
    const body = request.body;
    const blog = {
        ...body,
        like: body.like
    };
    Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
    .then(result => response.json(result))
    .catch(error => next(error))
});

module.exports = blogsRouter
