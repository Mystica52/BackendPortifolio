const Message= require('../models/message')
const {validationResult}= require('express-validator')
//get all Message
 exports.allMessage= async(req,res) =>{
    try{
     const messages= await Message.find();
     res.status(200).json(messages)
    }catch(err){
     res.status(500).json({message: err});
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
      res.status(500).json(error.array())
    }
    else{
      try{
         const savedMessage = await message.save();
      res.status(200).json(savedMessage)
 
     }catch(err){
         res.status(500).json({message: err});
 
     }
    }
    
    
}

exports.getOneMessage=async(req,res) =>{
    try{
     const message= await Message.findById(req.params.messageId);
     res.status(200).json(message);
    }catch(err){
     res.status(500).json({message: err});
    }
 }

 exports.deleteOneMessage=async(req,res) =>{
    try{
     const removedMessage= await Message.remove({_id: req.params.messageId});

     res.status(200).json(removedMessage);
    }catch(err){
     res.status(500).json({message: err});
    }
 }

 exports.UpdateOneMessage= async(req,res) =>{
    try{
     const updatedMessage= await Message.findById({_id: req.params.messageId}).updateOne(
        
        {name: req.body.name},
        {address: req.body.address},
        {message: req.body.message}
        
        );

        res.status(200).json(updatedMessage);
    }catch(err){
     res.status(500).json({message: err});
    }
 }

