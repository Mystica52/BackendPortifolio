const express= require('express');

const app= express();

const bodyParser= require('body-parser');

require('dotenv/config');
const swaggerUI= require('swagger-ui-express')
const swaggerSpec = require('./documentation')
const morgan= require('morgan');
const cors = require('cors')


app.use(morgan('dev'));
app.use(cors())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))


app.use(bodyParser.json());




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
    res.sendStatus(200)
});


require('dotenv/config');
const mongoose= require('mongoose');

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log('connected  to DB');
})








module.exports= app