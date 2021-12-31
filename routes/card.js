const express = require('express')
const cardController = require('../controllers/card')
const router  = express.Router()

router.get('/card', cardController.getAllCard)
router.post('/card', cardController.uploadImg, cardController.newCard)
// router.delete('/card', cardController.delecardllcard)

// router.get('/card/:name', cardController.getOnecard)
// router.post('/card/:name', cardController.newComment)
// router.delete('/card/:name', cardController.deleteOnecard)

module.exports = router
