const Post = require("../models/post");
const fs = require("fs");
const { title } = require("process");


//get all post
exports.allPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(404).json({ err: err , status:"404"});
  }
};



// add a post
exports.addPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image
    });
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({err : error,status:"500"});
  }


};

exports.getOne = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
    
  } catch (err) {
    res.status(404).json({ "err": err,status:"404"});
  }
};

exports.deleteOnePost = async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });

    res.status(200).json(removedPost);
  } catch (err) {
    res.status(404).json({ err:" the id of blog is  not found",status:"404"});
  }
};

exports.UpdateOnePost = async (req, res) => {
  try {
    var id = req.params.postId;
    const updatedBlog = await Post.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    if (updatedBlog) {
      return res.status(200).json({
        message:"updated",
        data: updatedBlog
      })
    } else {
      return res.status(500).json({
        message:" this is not updated"
        
      })
    }
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
    
  }
};

// exports.UpdateOnePost = async (req, res) => {
  
//   try {
//     const updatedPost = await Post.findById({
//       _id: req.params.postId,
//     }).update(
//       { $set: { title: req.body.title } },
      
//       { $set: { description: req.body.description } }
//     );
//     console.log("req",req.body.title)
//     // console.log( "update",updatedPost)
//     res.json(updatedPost);
//     // console.log(res)
//   } catch (err) {
//     res.status(404).json({  err :" blog not found",status:"404"});
//   }
// };
