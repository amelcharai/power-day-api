const express = require('express')
const routes = require('./routes/tea')

const app = express()

app.use(express.json())
app.use('/', routes)

// app.get('/', function (req, res) {
//   res.send(req.headers, req.originalUrl, req.method, req.body);
// })

const listener = app.listen(process.env.PORT || 4000, () => {
  console.log('App is listening on port ' + listener.address().port)
})
