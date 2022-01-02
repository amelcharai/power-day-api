const Card = require('../models/card')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const uploadImg = multer({ storage: storage }).single('image')

const getAllCard = (req, res) => {
  Card.find({}, (err, data) => {
    if (err) {
        return res.json({ Error: err })
    }
    return res.json(data)
  })
}

const getOneCard = (req, res) => {
  const title = req.params.title

  Card.findOne({ title: title }, (err, data) => {
    if(err || !data) {
      return res.json({ message: "Card doesn't exist." })
    } else {
      return res.json(data)
    }
  })
}

const newCard = (req, res) => {
  Card.findOne({ title: req.body.title }, (err, data) => {
    if (!data) {
      const newCard = new Card({
        title: req.body.title,
        body: req.body.body,
        img: req.file.path,
        video: req.body.video
      })
      newCard.save((err, data)=>{
        if(err) return res.json({ Error: err })
        return res.json(data)
      })
    } else {
      if(err) return res.json(`Something went wrong, please try again. ${err}`)
      return res.json({ message: 'Card already exists' })
    }
  })    
}

const updateCard = (req, res) => {
  const title = req.params.title
  const filter = { title: title }
  const options = {
    new: true
  }
  const newCard = {
    title: req.body.title,
    body: req.body.body,
    img: req.file.path,
    video: req.body.video
  }

  Card.findOneAndUpdate(
    filter,
    newCard,
    options,
    (err, doc) => {
      if (err) { return res.send(err) }
      else { return res.send(doc) }
    }
  )
}

module.exports = {
  uploadImg,
  getAllCard,
  getOneCard,
  newCard,
  updateCard
}
