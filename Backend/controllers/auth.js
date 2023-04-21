const { validationResult } = require('express-validator')
var jwt = require('jsonwebtoken')
var { expressjwt: expressJwt } = require('express-jwt')
const User = require('../modules/user')

exports.signup = (req, res) => {
  // user validation Check Result
  const errors = validationResult(req)
  // if error is present
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    })
  }

  const user = new User(req.body)
  // return res.json(user)
  user
    .save()
    .then((savedUser) => {
      res.json({
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      })
    })
    .catch((err) => {
      res.status(400).json({
        error: 'Failed to save user to DB',
      })
    })
}

exports.signin = (req, res) => {
  const { email, password } = req.body
  const errors = validationResult(req)
  // if error is present
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    })
  }
  // finds exactly 1 email
  User.findOne({ email })
    .then((result) => {
      // handle the result
      // Create Token
      const token = jwt.sign({ _id: result._id }, process.env.SECRET)

      // put token in cookie
      res.cookie('token', token, { expire: new Date() + 9999 })

      // send response to frontend
      const { _id, name, email, role } = result
      return res.json({ token, result: { _id, name, email, role } })
    })
    .catch((err) => {
      // handle the error
      // error message if no email is found
      if (err) {
        return res.status(400).json({
          error: 'User Email or Password Does Not Exist',
        })
      }
    })
  // User.findOne({ email }, (err, user) => {})
}

exports.signout = (req, res) => {
  res.clearCookie('token')
  res.json({
    message: 'User Sign out Successfully',
  })
}

// Protector Routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  algorithms: ['HS256'],
  userProperty: 'auth',
})

// Custom Middleware
exports.isAuthenticated = (req, res, next) => {
  let check = req.profile && req.auth && req.profile._id == req.auth._id //TODO: req.profile will be set from frontend
  if (!check) {
    return res.status(403).json({
      error: 'Access Denied!!!',
    })
  }
  next()
}
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: 'You are not ADMIN, ACCESS DENIED!!!',
    })
  }
  next()
}

// // If authentication fails
// if (!user.authenticate(password)) {
//   return res.status(401).json({
//     error: 'Email and Password is do not match!!!',
//   })
// }

// (err, user) => {
// if (err) {
//   console.error(err)
// } else {
//   console.log('User saved successfully:', user)
// }
// if (err) {
//   return res.status(400).json({
//     err: 'NOT Able to save user in DB',
//   })
// } else {
//   return res.json(user)
// }}
