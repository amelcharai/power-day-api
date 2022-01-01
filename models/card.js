const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: String,
  img: String,
  video: String
})

const Card = mongoose.model('Card', CardSchema)
module.exports = Card
