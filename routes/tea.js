const express = require('express')
const teaController = require('../controllers/tea')
const router  = express.Router()

router.get('/tea', teaController.getAllTea)
router.post('/tea', teaController.uploadImg, teaController.newTea)
router.delete('/tea', teaController.deleteAllTea)

router.get('/tea/:name', teaController.getOneTea)
router.post('/tea/:name', teaController.newComment)
router.delete('/tea/:name', teaController.deleteOneTea)

module.exports = router
