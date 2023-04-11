const express = require('express')
const app = express()
app.use(express.json())

const nodemailer = require('nodemailer')

app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/', (req, res) => {
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    server: 'gmail',
    auth: {
      user: '',
      pass: '',
    },
  })

  const mailOptions = {
    from: req.body.email,
    to: '',
    subject: '',
    text: '',
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      res.send(error)
    } else {
      console.log('Email sent')
      res.send('success')
    }
  })
})

app.listen(5000, console.log('Server running on port 5000'))
