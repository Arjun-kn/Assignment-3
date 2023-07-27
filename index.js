const fs =require('fs');
const http = require('http');


fs.writeFile("index.html",`
    <h1> Hello World </h1>
<p> This is {Your Name}... </p>
`,(error)=>{
    if(error){
        console.log(error);
    }
    console.log("Success");
});

const webServer = http.createServer(
    (req,res)=>{
        fs.readFile("index.html",(error,data)=>{
            res.end(data)
        })
    }
);

webServer.listen(5000);