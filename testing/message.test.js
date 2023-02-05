const  request  = require('supertest')
const mongoose  = require('mongoose')

const app = require('../app')
// const { response } = require('../index')
require('dotenv/config');

beforeAll(async ()=>{
    await  mongoose.connect(process.env.DB_CONNECTION)
})

afterAll(async()=>{
    await mongoose.disconnect();
    await mongoose.connection.close();
})
describe("get all message",()=>{
    describe("given a name, address and message", ()=>{

        it("should respond with a 200 status code", async()=>{
            const response =  await request(app).get("/messages")
            // console.log(response.body);
        expect(response.statusCode).toBe(200)
        },10000)
    })
})


describe("create  a message",()=>{
    describe("given a title, description and image", ()=>{

        it("should respond with a 200 status code", async()=>{
            const response =  await request(app).post("/messages/createMessage").send({
                name:"the  universe",
                address:"the huge  and biggest planet is Jupiter",
                message:"string"
            })
            
        expect(response.statusCode).toBe(200)
        },10000)

        
    })

    
})

// get by id
describe("get one message by id",()=>{
    describe("given a name, address and message", ()=>{

        it("should respond with a 200 status code", async()=>{
            const response =  await request(app).get("/messages/01")
            // console.log(response.body);
        expect(response.statusCode).toBe(200)
        },10000)
    })

    // describe("when the title, description, image is missing", ()=>{
    //     test("should response with a status code of 400", async ()=>{
    //        const  response =  await request(app).post("/posts/createBlog").send({
    //             title:"the  universe",
               
    //         })
            
    //     expect(response.statusCode).toBe(400)
    //     },10000)
        
    // })
})
//update

describe("update one message by id",()=>{
    describe("given a name, address and message", ()=>{

        it("should respond with a 200 status code", async()=>{
            const response =  await request(app).patch("/messages/update/01").send({
                name:"mystica",
                address:" rwanda",
                message:"I need to talk to you"
            })
            // console.log(response.body);
        expect(response.statusCode).toBe(200)
        },10000)
    })
})


//delete
// describe("delete one blog by id",()=>{
//     describe("given a name, address and message", ()=>{

//         test("should respond with a 200 status code", async()=>{
//             const response =  await request(app).delete("/messages/update/01")
//             // console.log(response.body);
//         expect(response.statusCode).toBe(200)
//         },10000)
//     })
// })