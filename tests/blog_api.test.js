const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Blog = require('../models/blog');

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

beforeEach(async () => {
    await Blog.deleteMany({})
  
    const blogObjects = initialBlogs.map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)
  })

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 100000)

test('verify the unique identifier property of blog', async () => {
    const response = await api.get('/api/blogs');
    const id = response.body[0].id;
    expect(id).toBeDefined()
})

afterAll(() => {
    mongoose.connection.close()
})