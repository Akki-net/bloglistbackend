const Blog = require('../models/blog')

const initialBlogs = [
    {
        author: 'surya',
        title: 'sun',
        description: 'Sun gives us light',
        like: 0
    },
    {
        author: 'bhanu',
        title: 'dhania',
        description: 'dhania gives us smell',
        like: 0 
    }
];

const blogsInDb = async () => {
    const blogs = await Blog.find({});
    return blogs
}

module.exports = { initialBlogs, blogsInDb }