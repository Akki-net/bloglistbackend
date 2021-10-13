var blogsRouter = require('express').Router();
var Blog = require('../models/blog');

blogsRouter.get("/", function (request, response) {
        Blog.find({})
            .then(function (result) {
                    return response.json(result);
                });
    });

blogsRouter.post("/", function (request, response, next) {
        var body = request.body;

        if (body.author == '' || body.title == '' || body.description == '') {
            return response.status(204).send({ error: "missing content" });
        }

        var blog = new Blog({
            author: body.author,
            title: body.title,
            description: body.description,
            like: body.like
        });

        blog.save().then(function (result) {
                return response.json(result);
            })
            .catch(function (error) {
                    return next(error);
                });
    });

blogsRouter.put("/:id",function (request, response, next) {
        var body = request.body;
        var blog = { 
            author : body.author,
            title : body.title,
            description : body.description,
            like : body.like
         };
    
        Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
            .then(function (result) {
                    return response.json(result);
                })
            .catch(function (error) {
                    return next(error);
                });
    });

module.exports = blogsRouter
