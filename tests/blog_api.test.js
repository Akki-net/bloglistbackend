const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Blog = require('../models/blog');
const helper = require('./test_helper');

describe('when there is initially some blogs saved', () => {
beforeEach(async () => {
    await Blog.deleteMany({})
  
    const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)
  })
})

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body.length).toBe(helper.initialBlogs.length)
})

test('a specific blog is within the returned blogs', async () => {
    const response = await api.get('/api/blogs')

    const contents = response.body.map(r => r.description)
    expect(contents).toContain(
      'dhania gives us smell'
    )
  })

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

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  
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

})

afterAll(() => {
    mongoose.connection.close()
})