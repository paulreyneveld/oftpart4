const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const blogsRouter = require('./controllers/blog')
const config = require('./utils/config')

const mongoUrl = config.MONGODB_URI

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

module.exports = app