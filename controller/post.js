const Post= require('../models/post')
 const allPost= async(req,res) =>{
    try{
     const posts= await Post.find();
     res.json(posts)
    }catch{
     res.json({message: err});
    }
 }

 module.exports= allPost