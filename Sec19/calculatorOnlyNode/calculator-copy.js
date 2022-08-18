const http = require("http");
const https = require("https");
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;




const server = http
    .createServer((req,res) => {
        fs.readFile('./index.html', (err,html) => {
            if(err) throw err;
            else {
                res.writeHeader(200, {"Content-Type": "text/html"});
                res.write(html);
                res.end();
            }
        })
    })
    .listen(3000,
        console.log(`Server running at http://${hostname}:${port}/`)
    );
