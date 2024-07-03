const http = require('http')

const myServer =http.createServer((req,res)=>{
    console.log(req.headers)
    res.end("Hello ")
});

myServer.listen(3000,()=>{
    console.log("server is running")
})

  