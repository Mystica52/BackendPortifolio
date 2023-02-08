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



describe("POST API /posts/blog", () => {
  
    const blog = {
      title: "the motivation speech",
       description: "the motivation speech is good",
      image: "path"
    };
    it("should successfully create an blog and return 200", (done) => {
       request(app).post('/posts/createBlog').send(blog)
        .end((err, res) => {
          if (err) return done(err);
       setTimeout(() => {
          expect(res).to.have.status(200);
    }, 20000);
          
          return done();
        });
    });
  })


  describe("get API /api/blog", () => {
  

    it(" should get all blog and return 200", (done) => {
       request(app).get('/posts/Blogs')
        .end((err, res) => {
          if (err) return done(err);
       setTimeout(() => {
          expect(res).to.have.status(200);
    }, 20000);
          
          return done();
        });
    });
  })

  const postId = "1229b52ca50601182da72457"
  describe("POST API /api/blog", () => {
  

    it("should get by id and return 200", (done) => {
       request(app).get('/posts/'+postId)
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
  

    it(" should update blog and return 200", (done) => {
       request(app).patch('/posts/update/'+postId)
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
  

    it(" should delete a blog and return 200", (done) => {
       request(app).delete('/posts/delete/'+postId)
        .end((err, res) => {
          if (err) return done(err);
       setTimeout(() => {
          expect(res).to.have.status(200);
    }, 20000);
          
          return done();
        });
    });
  })





