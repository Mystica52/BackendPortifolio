const Message= require('../models/message')
const {validationResult}= require('express-validator')
//get all Message
 exports.allMessage= async(req,res) =>{
    try{
     const messages= await Message.find();
     res.json(messages)
    }catch{
     res.json({message: err});
    }
 }

 

// add a Message
 exports.addMessage = async(req,res) =>{
    const message= new Message({
        name:req.body.name,
        address:req.body.address,
        message:req.body.message
    });

    const error=validationResult(req);
    if(!error.isEmpty){
      res.json(error.array())
    }
    else{
      try{
         const savedMessage = await message.save();
      res.json(savedMessage)
 
     }catch(err){
         res.json({message: err});
 
     }
    }
    
    
}

exports.getOneMessage=async(req,res) =>{
    try{
     const message= await Message.findById(req.params.messageId);
     res.json(message);
    }catch(err){
     res.json({message: err});
    }
 }

 exports.deleteOneMessage=async(req,res) =>{
    try{
     const removedMessage= await Message.remove({_id: req.params.messageId});

     res.json(removedMessage);
    }catch(err){
     res.json({message: err});
    }
 }

 exports.UpdateOneMessage= async(req,res) =>{
    try{
     const updatedMessage= await Message.findById({_id: req.params.messageId}).updateOne(
        
        {name: req.body.name},
        {address: req.body.address},
        {message: req.body.message}
        
        );

        res.json(updatedMessage);
    }catch(err){
     res.json({message: err});
    }
 }

