const express = require('express')
const router = express.Router()
const sendMessage = require('../controllers/contactControllers')

router.route('/').post(sendMessage)

module.exports = router
