var blogsRouter = require('express').Router();
var Blog = require('../models/blog');
var User = require('../models/user');

blogsRouter.get("/", async function (request, response) {
        const blogs = await Blog.find({}).populate('user',{ username: 1, name: 1, id: 1})
        return response.json(blogs);
    });

blogsRouter.post("/", async function (request, response) {
        var body = request.body;
        const user = await User.findById(body.userId);
        if (body.author == '' || body.title == '' || body.description == '') {
            return response.status(204).send({ error: "missing content" });
        }

        const like = body.like === undefined ? 0 : body.like;
        var blog = new Blog({
            author: body.author,
            title: body.title,
            description: body.description,
            like,
            user: user._id
        });

        const savedBlog = await blog.save();
        user.blogs = user.blogs.concat(savedBlog._id);
        await User.findByIdAndUpdate(user._id, user);

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
