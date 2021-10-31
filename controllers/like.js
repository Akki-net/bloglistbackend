const likeRouter = require('express').Router();
const Like = require('../models/like');

likeRouter.get('/', async (req, res) => {
    const likes = await Like.find({});
    return res.json(likes);
})

likeRouter.post('/', async (req, res) => {
    const likes = req.body;
    await Like.deleteMany({});

    const likeObj = likes.map(like => new Like({like}));
    const promiseArray = likeObj.map(like => like.save());
    const arr = await Promise.all(promiseArray)

    return res.json(arr);
})

module.exports = likeRouter 