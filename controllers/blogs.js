var jwt = require('jsonwebtoken');
var blogsRouter = require('express').Router();
var Blog = require('../models/blog');
var User = require('../models/user');

blogsRouter.get("/", async function (request, response) {
        const blogs = await Blog.find({}).populate('user',{ username: 1, name: 1, id: 1})
        return response.json(blogs);
    });

blogsRouter.post("/", async function (request, response) {
        var body = request.body;
        const decodedToken = jwt.verify(request.token, process.env.SECRET);
        
        if(!request.token || !decodedToken.id){
            return response.status(401).json({
                error: "missing or invalid token"
            })
        }

        const user = await User.findById(decodedToken.id);

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
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    const user = await User.findById(decodedToken.id);
    const blog = await Blog.findById(request.params.id);

    if(user._id.toString() !== blog.user.toString()){
        return response.status(401).json({
            error: "attempted by a wrong user or invalid token"
        })
    }
    
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end();
})

module.exports = blogsRouter
