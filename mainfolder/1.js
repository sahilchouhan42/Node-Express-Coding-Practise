const http = require('http')
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': "text/plain"})
    res.end('Welcome to my first Node Js Server')
})

server.listen(5000, ()=>console.log('Server is running on port'))