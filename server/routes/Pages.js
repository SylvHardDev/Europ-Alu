const express = require('express')
const router = express.Router()
const { addPage } = require('../controllers/pageController')

router.post('/' ,addPage)

module.exports = router