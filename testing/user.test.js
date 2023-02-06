const  request  = require('supertest')
const mongoose  = require('mongoose')

const app = require('../app')

require('dotenv/config');

beforeAll(async ()=>{
    await  mongoose.connect(process.env.DB_CONNECTION)
})

afterAll(async()=>{
    await mongoose.disconnect();
    await mongoose.connection.close();
})


test (' should sign up for user', async()=>{
    await (await request(app).post('/auth')).send({
        name:"test",
        email:"test@test.com",
        password:"test123"
    })
    expect(201)
},10000)
// describe("create account",()=>{
//     describe("given a name, email and password", ()=>{

//         test("should respond with a 200 status code", async()=>{
//             const response =  await request(app).post("/auth").send({
//                 name: "mary",
//                 email:"marie@gmail.com",
//                 password:"12345"
//             })
//         expect(response.statusCode).toBe(200)
//         },10000)
//     })
// })

// describe("login with  account",()=>{
//     describe("given a username and password", ()=>{

//         test("should respond with a 200 status code", async()=>{
//             const response =  await request(app).post("/auth/login").send({
               
//                 username:"marie@gmail.com",
//                 password:"12345"
//             })
//         expect(response.statusCode).toBe(200)
//         },10000)
//     })
// })