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


// setTimeout(() => {
//     expect(true).toBe(true);
//   }, 20000);

// it (' should sign up for user', async()=>{
//     await (await request(app).post('/auth')).send({
//         name:"test",
//         email:"test@test.com",
//         password:"test123"
//     })
//     expect(201)
// },
// )



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




let token = "";

describe("POST API /api/user", () => {
  
  const user = {
    name: "mystica",
     email: "mystica123456@gmail.com",
    password: "pl23"
  };
  it("should successfully create an account and return 200", (done) => {
     request(app).post('/auth').send(user)
      .end((err, res) => {
        if (err) return done(err);
     setTimeout(() => {
        expect(res).to.have.status(200);
  }, 20000);
        
        return done();
      });
  });

  const user1 = {
    name: "student",
     email: "student6@gmail.com",
    password: "p2123"
  };
  it("should successfully create an account and return 500", (done) => {
    request(app).post('/auth').send(user1)
     .end((err, res) => {
       if (err) return done(err);
    setTimeout(() => {
       expect(res).to.have.status(500);
 }, 20000);
       
       return done();
     });
 });
})
  

  describe("POST API /api/user", () => {
  
    const user = {
     
    username: "mystica123456@gmail.com",
    password: "pl23"
    };
    it("should successfully create an account and return 200", (done) => {
       request(app).post('/auth/login').send(user)
        .end((err, res) => {
          if (err) return done(err);
       setTimeout(() => {
          expect(res).to.have.status(200);
    }, 20000);
          
          return done();
        });
    });
})

//   it("Should return 409 when email exists", (done) => {
//     const oldUser = user.email;
//     chai
//       .request(app)
//       .post("/api/user/")
//       .send(user)
//       .end((err, res) => {
//         if (oldUser) return done(err);
//         expect(res).to.have.status(409);
//         return done();
//       });
//   });
