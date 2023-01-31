const express= require('express');
const router= express.Router();
const Message= require('../models/message');
const Message_controller=require('../controller/message');
const {check}=require('express-validator')


//get all Message
router.get('/',Message_controller.allMessage);

//submit a Message
router.post('/createMessage',[check("name").exists().withMessage('name is required')],[check("address").exists().withMessage('address is required')],[check("message").exists().withMessage('message is required')],Message_controller.addMessage);

//get one by id or specific Message
router.get('/:messageId', Message_controller.getOneMessage);

 //delete
 router.delete('/delete/:messageId', Message_controller.deleteOneMessage);

 //update a Message
 router.patch('/update/:messageId',Message_controller.UpdateOneMessage);
 

module.exports = router;