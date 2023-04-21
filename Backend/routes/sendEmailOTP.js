const express = require('express')
const router = express.Router()

const { sendOTP } = require('../controllers/sendEmailOTP')

router.post('/sendotp', sendOTP)

module.exports = router
