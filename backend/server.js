const express = require('express')
const dotenv = require('dotenv')
const contactRoutes = require('./routes/contactRoutes')

dotenv.config()
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/form', contactRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV}`)
)
