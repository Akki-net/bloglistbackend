var blogsRouter = require('express').Router();
var Blog = require('../models/blog');

blogsRouter.get("/", async function (request, response) {
        const blogs = await Blog.find({})
        return response.json(blogs);
    });

blogsRouter.post("/", async function (request, response) {
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

        const savedBlog = await blog.save();
        response.json(savedBlog)
    });

blogsRouter.put("/:id", async function (request, response) {
        var body = request.body;
        var blog = { 
            author : body.author,
            title : body.title,
            description : body.description,
            like : body.like
         };
        
        const result = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
        
        response.json(result);
    });

blogsRouter.delete('/:id', async function(request, response){
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end();
})

module.exports = blogsRouter
