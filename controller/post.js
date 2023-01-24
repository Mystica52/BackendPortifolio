const Post= require('../models/post')

//get all post
 exports.allPost= async(req,res) =>{
    try{
     const posts= await Post.find();
     res.json(posts)
    }catch{
     res.json({message: err});
    }
 }

 

// add a post
 exports.addPost = async(req,res) =>{
    const post= new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const savedPost = await post.save();
     res.json(savedPost)

    }catch(err){
        res.json({message: err});

    }
    
}

exports.getOne=async(req,res) =>{
    try{
     const post= await Post.findById(req.params.postId);
     res.json(post);
    }catch(err){
     res.json({message: err});
    }
 }

 exports.deleteOnePost=async(req,res) =>{
    try{
     const removedPost= await Post.remove({_id: req.params.postId});

     res.json(removedPost);
    }catch(err){
     res.json({message: err});
    }
 }

