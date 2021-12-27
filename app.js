require('dotenv').config()

const express = require('express')
const routes = require('./routes/tea')
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

app.use(express.json())
app.use('/', routes)
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
