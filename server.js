const express = require("express")
const app = express()

app.use(express.json())

const listener = app.listen(process.env.PORT || 4000, () => {
  console.log('App is listening on port ' + listener.address().port)
})