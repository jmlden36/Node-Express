const http = require('http');
//HTTP built in module allowing for setup of a web server
//Web servers are listening for requests

//req is incoming request
//res is response sent back
const server = http.createServer((req,res)=>{
  if(req.url === '/') {
    res.end("welcome to here")
  }
  if(req.url === '/about') {
    res.end('Here is a story about a dog')
  }
    res.end(`<h1>Ooops!</h1>
  <p>we can't find the page you are looking for</p>
  <a href="/">Home</a>`)
})

server.listen(6001)

//this has an 'ERR_STREAM_WRITE_AFTER_END' issue with the home page