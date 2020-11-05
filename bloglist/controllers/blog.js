const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
  })
  
blogsRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body)
    const savedBlog = await blog.save()
    response.json(savedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
  const target = request.params.id
  console.log(target)
  await Blog.findByIdAndDelete(target)
  response.status(204).end()
})

module.exports = blogsRouter