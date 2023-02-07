const  request  = require('supertest')
const mongoose  = require('mongoose')
require('dotenv/config');

const app = require('../app');
const { expect } = require('parser');
const { addPost } = require('../controller/post');


beforeAll(async ()=>{
    await  mongoose.connect(process.env.DB_CONNECTION)
})

afterAll(async()=>{
    await mongoose.disconnect();
    await mongoose.connection.close();
})



describe("POST API/messages", () => {
  
    const messages = {
      name: "the motivation speech",
      address: "the motivation speech is good",
      message: "path"
    };
    it("should successfully create an message and return 200", (done) => {
       request(app).post('/messages/createMessage').send(messages)
        .end((err, res) => {
          if (err) return done(err);
       setTimeout(() => {
          expect(res).to.have.status(200);
    }, 20000);
          
          return done();
        });
    });
  })


  describe("get API /Messages", () => {
  

    it(" should get all blog and return 200", (done) => {
       request(app).get('/messages')
        .end((err, res) => {
          if (err) return done(err);
       setTimeout(() => {
          expect(res).to.have.status(200);
    }, 20000);
          
          return done();
        });
    });
  })

  const messageId = "1229b52ca50601182da72457"
  describe("get API /messages/", () => {
  

    it("should get message by id and return 200", (done) => {
       request(app).get('/messages/'+messageId)
        .end((err, res) => {
          if (err) return done(err);
       setTimeout(() => {
          expect(res).to.have.status(200);
    }, 20000);
          
          return done();
        });
    });
  })


  describe("update API /api/blog", () => {
  

    it(" should update message and return 200", (done) => {
       request(app).patch('/messages/update/'+messageId)
        .end((err, res) => {
          if (err) return done(err);
       setTimeout(() => {
          expect(res).to.have.status(200);
    }, 20000);
          
          return done();
        });
    });
  })

  describe("delete API /api/blog", () => {
  

    it(" should delete a message and return 200", (done) => {
       request(app).delete('/messages/delete/'+messageId)
        .end((err, res) => {
          if (err) return done(err);
       setTimeout(() => {
          expect(res).to.have.status(200);
    }, 20000);
          
          return done();
        });
    });
  })