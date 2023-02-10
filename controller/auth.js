const User = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async(req, res) => {
  userExist = await User.find({ email: req.body.email });
  console.log("userExist", userExist);
  if (userExist.length) {
    return res.status(400).json({
      message: "user already exist",
      user: userExist
    });
  }

  const hashedPass = bcrypt.hashSync(req.body.password, 8);
 

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
  });

  user
    .save()
    .then((user) => {
      return res.status(200).json({
        message: "user added successfully",
        user,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error,
      });
    });
};

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ $or: [{ email: username }] }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.status(500).json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ name: user.name }, "AzQ,PI)0(");

          res.status(200).json({
            message: "Login Successful!",
            token,
          });
        } else {
          res.status(500).json({
            message: "Password does not matched ",
          });
        }
      });
    } else {
      res.status(404).json({
        message: "no user found",
      });
    }
  });
};

//   const validateUniqueUser = async (req, res, next) => {
//     const existingEmail = await User?.findOne({ email: req.body.email });
//     if (existingEmail) {
//       return res.send({
//         message: `User with ${existingEmail?.email} already exists`,
//       });
//     }
//     next();
//   };

module.exports = {
  register,
  login,
};
