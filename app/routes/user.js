const express = require('express')
const controller = require('../controllers/user')
const router = express.Router()
const path = 'user'

router.get(
    `/${path}`,
    (req, res) => {
        controller.getData
    }
)

module.exports = router