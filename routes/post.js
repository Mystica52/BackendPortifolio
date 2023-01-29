const express= require('express');
const router= express.Router();
const Post= require('../models/post');
const Post_controller=require('../controller/post');



//get all post
router.get('/',Post_controller.allPost);

//submit a post
router.post('/',Post_controller.addPost);

//get one by id or specific post
router.get('/:postId', Post_controller.getOne);

 //delete
 router.delete('/:postId', Post_controller.deleteOnePost);

 //update a post
 router.patch('/:postId',async(req,res) =>{
    try{
     const updatedPost= await Post.updateOne(
        {_id: req.params.postId}, 
        {$set:{title: req.body.title}}
        );

        res.json(updatedPost);
    }catch(err){
     res.json({message: err});
    }
 });
 

module.exports = router;