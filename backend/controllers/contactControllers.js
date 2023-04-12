const nodemailer = require('nodemailer')

// @desc Fetch all beats
// @route GET /api/beats
// @access all users
const sendMessage = (req, res) => {
  //     Open Mail > Settings > See all Settings > Forwarding and POP/IMAP.
  // Enable POP download: & Enable IMAP access: (then save the settings). Mail Settings Image
  // Open Your Gmail Account > security > 2-step verification(enable it).
  // Go to App Passwords > select device > select app(you can create any custom app).
  // Copy App Password and use it in your application.
  //   console.log(req.body)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })

  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.name} at ${req.body.email}`,
    text: req.body.message,
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
}
module.exports = sendMessage
