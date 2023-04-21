const express = require('express')
const router = express.Router()

const { verifyotp } = require('../controllers/otpVerification')

router.post('/verifyotp', verifyotp)

module.exports = router
