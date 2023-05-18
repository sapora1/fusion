require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// My Routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

// DataBase Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB CONNECTED!!!')
    
  })
// .catch(console.log('***DATABASE CONNECTION ERROR!! !***'))

//Port Number
const port = process.env.PORT || 8000

// Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// JWT Token
// Initialize the express-jwt middleware with a secret value
// app.use(jwt({ secret: process.env.SECRET }))

// routes
app.use('/api', authRoutes)
app.use('/api', userRoutes)

app.get('/', (req, res) => {
  return res.send(
    'this App is an api for backend that is used for the frontend of the app'
  )
})

app.get('/login', (req, res) => {
  return res.send('Hello login')
})

app.get('/signout', (req, res) => {
  return res.send('Hello sign out')
})
// root node route
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})

// Get
// Post
// put
// delete
