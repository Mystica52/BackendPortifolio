const swaggerJSDoc=require('swagger-jsdoc')


const options = {
   swaggerDefinition:{
      openapi :'3.0.0',
      info :{
         title:'Node JS API PROJECT FOR MONGODB',
         version: '1.0.0'
      },
      servers:[
        {
         url:'/'
        }, 
        {
            url:''
        }
    ]
   },
   components: {
    securitySchemes:{
        BearerToken:{
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
        }
    }
   },
   apis:['documentation/**/*.doc.js']
}
 const swaggerSpec=swaggerJSDoc(options)
 module.exports= swaggerSpec
