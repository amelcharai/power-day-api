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

const newCard = (req, res) => {
  Card.findOne({ name: req.body.name }, (err, data) => {
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

module.exports = {
  uploadImg,
  getAllCard,
  newCard
}
