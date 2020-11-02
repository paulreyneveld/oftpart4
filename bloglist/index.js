const app = require('./app')
const http = require('http')
const server = http.createServer(app) 
const logger = require('./utils/logger')
const config = require('dotenv').config()

const PORT = 3003
server.listen(PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
