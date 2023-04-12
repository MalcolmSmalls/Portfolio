const express = require('express')
const dotenv = require('dotenv')
const contactRoutes = require('./routes/contactRoutes')
const path = require('node:path')

dotenv.config()
const app = express()
app.use(express.json())

app.use('/api/form', contactRoutes)

const __newPath = path.resolve()
app.use(express.static(path.join(__newPath, '/frontend/public')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__newPath, '/frontend/dist')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__newPath, 'frontend', 'dist', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running.....')
  })
}

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV}`)
)
