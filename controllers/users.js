const User = require('../models/user');
const usersRouter = require('express').Router();
const Blog = require('../models/blog');
const bcrypt = require('bcrypt');

usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('blogs', { title: 1, author: 1, id: 1 });
    response.json(users)
})

usersRouter.post('/', async (request, response) => {
    const body = request.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);
    const blogs = await Blog.find({});
    const len = blogs.length;

    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash,
        likes: new Array(len).fill(false)
    });

    const savedUser = await user.save();
    
    response.json(savedUser)
})

module.exports = usersRouter