const  request  = require('supertest')
const mongoose  = require('mongoose')
require('dotenv/config');

const app = require('../app');
const { response } = require('../app');
const { expect } = require('parser');
const { addPost } = require('../controller/post');


beforeAll(async ()=>{
    await  mongoose.connect(process.env.DB_CONNECTION)
})

afterAll(async()=>{
    await mongoose.disconnect();
    await mongoose.connection.close();
})



// describe('Todo Api for blog', ()=>{

//     describe('get blog by id',() =>{

//         it('GET/blogs/id --> 404 if not found',async()=>{
//             const blogId = mongoose.Types.ObjectId.toString();
//             const blog =await addPost({
//                 blogId,
//                 title:"the truth",
//                 description: " the biggest truth is saying to someone reality",
//                 image: "path"
//             });
            

            

//             const {body, statusCode} =await request(app).get(`/posts/${blogId}`)
//             expect(statusCode).toBe(200)
//             expect(body).toBe(blog)
    
//         })

//         it('GET/blogs/id --> 200 status and the blog',async()=>{

//             const postId = 'post-123'

//             return  await request(app).get(`/posts/${postId}`).expect(404);
    
//         })
    

//     })
    // it('GET/blogs -->blog lists',async()=>{

    //     return await request(app).get('/posts/blogs')
    //     .expect(200)
    //     .then((response)=>{
    //         expect(response.body).toEqual(expect.arrayContaining([
    //             expect.objectContaining({
    //                 title:expect.any(String),
    //                 description:expect.any(String),
    //                 image:expect.any(String)
    //             }),
    //         ]));
    //     });

    // });

    // it('GET/blogs/id -->specific blog  by id',async()=>{
    //     return await request(app).get('/posts/1')
    //     .expect(200)
    //     .then((response)=>{
    //         expect(response.body).toEqual(expect.arrayContaining([
    //             expect.objectContaining({
    //                 title:expect.any(String),
    //                 description:expect.any(String),
    //                 image:expect.any(String),
    //                 completed:expect.any(Boolean)
    //             }),
    //         ]));
    //     });

    //  })

//     // it('GET/blogs/id --> 404 if not found',async()=>{

//     //     return await request(app).get('/posts/9999999').expect(404);

//     // })

//     it('POST/blog -->created blog ',async()=>{
//         return  await request(app).post('/posts/blogs').send({
//             title:"the  universe",
//             description:"the huge  and biggest planet is Jupiter",
//             image:"path",
            
//         })
//         .expect('Content-Type', /json/)
//         .expect(201)
//         .then((response)=>{
//             expect(response.body).toEqual(expect.arrayContaining([
//                 expect.objectContaining({
//                     title:"the  universe",
//                     description:"the huge  and biggest planet is Jupiter",
//                     image:"path",
//                     completed:false
//                 }),
//             ]));
//         });


//     })

//     it('GET/todos -->blog lists',async()=>{

//     })

//     it('GET/todos -->blog lists',async()=>{

//     })
// })

// get all blog
describe("get all blog",()=>{
    describe("given a title, description and image", ()=>{

        test("should respond with a 200 status code", async()=>{
            const response =  await request(app).get("/posts/blogs")
            // console.log(response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty({
        title: "one",
        description: "the one of good",
        image:"path"
        })
        },10000)

        test("should return a list of the blog", async()=>{
            const response =  await request(app).get("/posts/blogs")
            
        expect(response.statusCode).toBe(200)
        },10000)

    })
})

//create a blog
describe("create  blog",()=>{
    describe("given a title, description and image", ()=>{

        test("should respond with a 200 status code", async()=>{
            const response =  await request(app).post("/posts/createBlog").send({
                title:"the  universe",
                description:"the huge  and biggest planet is Jupiter",
                image:"string"
            })
            
        expect(response.statusCode).toBe(200)
        },10000)

        
       
    })

    
})

// get by id
describe("get one blog by id",()=>{
    describe("given a title, description and image", ()=>{

        test("should respond with a 200 status code", async()=>{
            const response =  await request(app).get("/posts/01")
            // console.log(response.body);
        expect(response.statusCode).toBe(200)
        },10000)
    })

    describe("when the title, description, image is missing", ()=>{
        test("should response with a status code of 400", async ()=>{
           const  response =  await request(app).post("/posts/createBlog").send({
                title:"the  universe",
               
            })
            
        expect(response.statusCode).toBe(400)
        },10000)
        
    })
})

describe("update one blog by id",()=>{
    describe("given a title, description and image", ()=>{

        test("should respond with a 200 status code", async()=>{
            const response =  await request(app).patch("/posts/update/01").send({
                title:"the  universe",
                description:" biggest planet is Jupiter",
                image:"string"
            })
            // console.log(response.body);
        expect(response.statusCode).toBe(200)
        },10000)
    })
})

describe("delete one blog by id",()=>{
    describe("given a title, description and image", ()=>{

        test("should respond with a 200 status code", async()=>{
            const response =  await request(app).delete("/posts/update/01")
            // console.log(response.body);
        expect(response.statusCode).toBe(200)
        },10000)
    })
})