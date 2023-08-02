const http = require('http')
const port = 9000;

const Myserver = http.createServer(function(req,res){
    res.write("<h1>Node js</h1>")
    res.end()
})

Myserver.listen(port,()=>{
    console.log(`port is running on ${port}`);
})