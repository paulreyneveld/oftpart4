const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('there are three posts', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(3)
})

test('api posts new data', async () => {
    const blog = {
        "title": "api", 
        "author": "post",
        "url": "test",
        "likes": 123
    }

    await api
        .post('/api/blogs')
        .send(blog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    // const response = await api.get('/api/blogs')
    // const contents = response.body.map(r => r.content)

})

afterAll(() => {
    mongoose.connection.close()
})