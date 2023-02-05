const express  = require('express')
const router = express.Router()

const AuthController = require ('../controller/auth.js')

router.post('/',function(req, res){
    // AuthController.validateSignUp,
    AuthController.validateUniqueUser, 
    AuthController.register
  })
router.post('/login', AuthController.login)

module.exports = router