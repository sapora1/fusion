const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const { signout, signup, signin, isSignedIn } = require('../controllers/auth')

router.post(
  '/signup',
  // user Validation Check
  [
    // username must be at least 3 chars long
    check('name', 'Name Should be  at least 3 character').isLength({
      min: 3,
    }),
    check('email', 'Email is required').isEmail(),
    // password must be at least 3 chars long
    check('password', 'Password should be at least 3 character ').isLength({
      min: 3,
    }),
  ],
  signup
)
router.post(
  '/signin',
  // user Validation Check
  [
    // username must be at least 3 chars long
    check('email', 'Email is required').isEmail(),
    // password must be at least 3 chars long
    check('password', 'Password Field is required').isLength({
      min: 3,
    }),
  ],
  signin
)

router.get('/signout', signout)

// router.get('/testroute', isSignedIn, (req, res) => {
//   res.json(req.auth)
// })

module.exports = router
