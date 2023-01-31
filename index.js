const express= require('express');

const app= express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');

require('dotenv/config');
// const imageUpload=require(express-fileupload)

app.use(bodyParser.json());

// import routes

const postsRouter= require('./routes/post');

app.use('/posts', postsRouter);



const messagesRouter= require('./routes/message');

app.use('/messages', messagesRouter);


const userRouter= require('./routes/auth');

app.use('/auth', userRouter);
// //middlewares
// app.use('/posts', postsRouter(req,res) =>{
//     console.log('this is middleware running')
// });

//rootes
app.get('/', (req,res) =>{
    res.send('welcome to my portfolio')
});

const database=module.exports = () =>{
    const connectionParams = {
        useNewUrlParser: true,
        userUnifiedTopology:true,
    }

    

    try{
        mongoose.connect(process.env.DB_CONNECTION)
        console.log('connected  to DB')
    } catch(error){
        console.error(error);
        console.log('database connection failed')
    }
}

database();


app.listen(3000,() =>{
    console.log('server is started on port 3000')
});