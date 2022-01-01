require('dotenv').config()

const express = require('express')
const compression = require('compression')
const mongoose = require('mongoose')
const helmet = require('helmet')
const tea = require('./routes/tea')
const card = require('./routes/card')

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*")
  next()
})

app.use(express.json())
app.use('/', tea)
app.use('/', card)
app.use('/uploads', express.static('./uploads'))
app.use(helmet())
app.use(compression())

app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html')
})

const listener = app.listen(process.env.PORT || 4000, () => {
  console.log('App is listening on port ' + listener.address().port)
})

mongoose.connect(
  process.env.MONGODB_URI,
    { useUnifiedTopology: true,
      useNewUrlParser: true
    },
    (err) => {
      if (err) return console.log("Error: ", err)
      console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState)
    }
 )
