const express= require('express');

const app= express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');

require('dotenv/config');
const swaggerUI= require('swagger-ui-express')
const swaggerSpec = require('./documentation')

require('dotenv/config');
// const imageUpload=require(express-fileupload)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))


app.use(bodyParser.json());

/**
 * @swagger
 * /posts:
 *  get:
 *   
 *      summary: this api  is used to get all blogs
 *      description: this api is used to fetch all data from file of blogs in mongodb
 *      responses:
 *          200:
 *              description: this api is used to fetch all data from file of blogs in mongodb
 *              content:
 *                    application/json
 */


// import routes

const userRouter= require('./routes/auth');

app.use('/auth', userRouter);

const postsRouter= require('./routes/post');

app.use('/posts', postsRouter);



const messagesRouter= require('./routes/message');

app.use('/messages', messagesRouter);
// //middlewares
// app.use('/posts', postsRouter(req,res) =>{
//     console.log('this is middleware running')
// });

//rootes

/**
 * @swagger
 * /:
 *  get:
 *      summary: this api  is used to check if get method is working or not
 *      description: this api is used to check if get method is working or not
 *      responses:
 *          200:
 *              description: To test Get method
 */
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