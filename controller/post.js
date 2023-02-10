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

const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

// Generate
const url = cloudinary.url("olympic_flag", {
  width: 100,
  height: 150,
  Crop: "fill",
});

// add a post
exports.addPost = async (req, res) => {
  const response = cloudinary.uploader.upload(
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" }
  );

  response
    .then(async(data) => {
      const post = new Post({
        title: req.body.title,
        description: req.body.description,
        image: data.secure_url,
      });
      const savedPost = await post.save();
      res.status(200).json(savedPost);
    })
    .catch((err) => {
      res.status(500).json({err : err,status:"500"});
    });
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
