const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Blog = require('../models/blog');
const testHelper = require('../utils/test_helper');

beforeEach(async () => {
    await Blog.deleteMany({})
  
    const blogObjects = testHelper.initialBlogs.map(blog => new Blog(blog))
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

test('a valid blog can be added', async () => {
    const newBlog = {
        author : 'Akash',
        title : 'Sky is Unlimited',
        description : 'lage raho munna bhai',
        likes : 0
    };

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-type', /application\/json/)

    const blogsAtEnd = await testHelper.blogsInDb();
    expect(blogsAtEnd).toHaveLength(testHelper.initialBlogs.length + 1)
  
    const contents = blogsAtEnd.map(b => b.description);
    expect(contents).toContain('lage raho munna bhai');
})

test('verifies a blog that has missing like\'s property', async () => {
    let newBlog = {
        author: 'prince',
        title: 'dream',
        description: 'keep sleeping.. lol'        
    };

    if(!newBlog.like){
        newBlog.like = 0
    }

    const rtnBlog = await api
    .post('/api/blogs')
    .send(newBlog)

    expect(rtnBlog.body.like).toBe(0);
})

test('verify missing property of title', async () => {
    const newBlog = {
        author: 'radhe',
        description: 'radhe radhe',
        like: 0
    };

    await api.
        post('/api/blogs')
        .send(newBlog)
        .expect(400)
        .toJSON()     

})

afterAll(() => {
    mongoose.connection.close()
})