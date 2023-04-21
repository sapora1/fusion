const User = require('../modules/user')
// const File = require('../modules/file')

exports.getUserById = (req, res, next, id) => {
  // const { _id } = req.body //Debugging
  // console.log(id)//Debugging
  User.findById(id)
    .then((result) => {
      req.profile = result
      next()
    })
    .catch((err) => {
      if (err) {
        return res.status(400).json({
          error: 'No User was Found in DB',
          // err: err,//Debugging
        })
      }
    })
}
// we are hiding user credential to send back with the response
exports.getUser = (req, res) => {
  // TODO: get back here for password
  req.profile.salt = undefined //done
  req.profile.encry_password = undefined //done
  req.profile.createdAt = undefined //done
  req.profile.updatedAt = undefined //Not done
  return res.json(req.profile)
}

// TODO:Getting All Users
// exports.getAllUser = (req, res) => {
//   // console.log('HIT')
//   User.find()
//     .then((result) => {
//       return res.json(result)
//       // next()
//     })
//     .catch((err) => {
//       error: 'No User In The Database'
//     })

//   // .populate({
//   //   path: 'user',
//   //   select: 'email',
//   // })
// }

exports.updateUser = (req, res) => {
  id = req.profile._id
  User.findByIdAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true, useFiendAndModify: false }
  )
    .then((result) => {
      result.salt = undefined //done
      result.encry_password = undefined //done
      return res.json(result)
    })
    .catch((err) => {
      return res.json({
        err: 'you are not authorized',
      })
    })
}

// exports.userUploadList = (req, res) => {
//   id = req.profile._id
//   Order.find({ User: req.profile._id })
//     .populate('User', '_id name ')
//     .exec((err, order) => {
//       if (err) {
//         return res.status(400).json({
//           error: 'No Order in this account',
//         })
//       }
//       return res.json(order)
//     })
// }
