const express= require('express');
const router= express.Router();
const Post= require('../models/post');
const Post_controller=require('../controller/post');
const authenticate =require('../middlewares/authenticate')



//get all post
router.get('/',Post_controller.allPost);

//submit a post
router.post('/',Post_controller.addPost);

//get one by id or specific post
router.get('/:postId', Post_controller.getOne);

 //delete
 router.delete('/delete/:postId',Post_controller.deleteOnePost);

 //update a post
 router.patch('/update/:postId',Post_controller.UpdateOnePost);
 

module.exports = router;