const http = require('http')

const myServer =http.createServer((req,res)=>{
    console.log(req.headers)
    
    if(req.url === '/')
    {
        res.end("hello")
    }

    if(req.url === '/about')
    {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end(`<h1>ABOUT PAGE</h1>`)
    }

    if(req.url === '/contact')
    {
        res.setHeader('Content-Type','text/html')
        res.write('Contact Page')
        res.end()
    }
});

myServer.listen(3000,()=>{
    console.log("server is running")
})

  