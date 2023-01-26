const express  = require('express')
const router = express.Router()

const AuthController = require ('../controller/auth.js')

router.post('/', AuthController.register)
router.post('/login', AuthController.login)

module.exports = router