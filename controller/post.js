const Post = require("../models/post");
require("dotenv/config");
// const imageUpload=require(express-fileupload)

//get all post
exports.allPost = async (req, res) => {
  try {
    // uploadImage(req.body.image)
    // .then((url)=> res.send(url))
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(400).json({ message: err });
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

// The output url
console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag

// add a post
exports.addPost = async (req, res) => {
  // try{
  //    const file= await fs.readFileSync('C:\Users\Hp\Pictures\Challenge_school.jpg');
  //    console.log(file);
  //    cloudinary.uploader.upload_stream({ resource_type: 'auto'}, function(error,result){
  //       console.log(result)
  //    }).end(file)

  // }
  // catch(error){
  //    console.log(error)
  // }
  // Upload

  const response = cloudinary.uploader.upload(
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" }
  );

  response
    .then(async(data) => {
      //   console.log(data);
      console.log(data.secure_url);
      const post = new Post({
        title: req.body.title,
        description: req.body.description,
        image: data.secure_url,
      });
      const savedPost = await post.save();
      res.json(savedPost);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.getOne = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

exports.deleteOnePost = async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });

    res.json(removedPost);
  } catch (err) {
    res.json({ message: err }).status(404);
  }
};

exports.updateOnePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({ _id: req.params.postId });

    res.json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
