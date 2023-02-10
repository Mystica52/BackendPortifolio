const app = require("./app")
const Port = process.env.PORT || 3000;
app.listen(Port,() =>{
    console.log('server is started on port 3000')
});