const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const loginRouter = require('express').Router();

loginRouter.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    res.status(200).send(user.likes)
});

loginRouter.post('/', async (req, res) => {
    const body = req.body;
    const user = await User.findOne({username: body.username});

    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash);
    
    if(!(user && passwordCorrect)){
        return res.status(401).json({
            error : 'invalid username or password'
        })
    }

    const userForToken = {
        username: user.username,
        id: user._id
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    res.status(200).send({token, username: user.username, name: user.name, likes: user.likes, id: user._id})
})

loginRouter.put('/:id', async (req, res) => {
    const body = req.body;
    const user = await User.findById(body.id);
    user.likes.splice(0, user.likes.length);

    for(const x of body.likes){
        const newUser = {
            ...user,
            likes: user.likes.push(x)
        };

        await User.findByIdAndUpdate(req.params.id, newUser, {new: true})
    }

    const userToSend = await User.find({username: body.username})
    res.status(200).send({token: body.token, username: user.username, name: user.name, likes: userToSend.likes, id: user._id})
})

module.exports = loginRouter