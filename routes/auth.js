const express  = require('express')
const router = express.Router()
const {check}=require('express-validator')

const AuthController = require ('../controller/auth.js')



router.post('/',[check("name").exists().withMessage('name is required')],[check("email").exists().withMessage('email is required')],[check("password").exists().withMessage('password is required')], AuthController.register)
router.post('/login',[check("username").exists().withMessage('email is required')],[check("password").exists().withMessage('password is required')], AuthController.login)

module.exports = router