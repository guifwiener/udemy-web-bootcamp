const http = require("http");
const fs = require('fs');
const { parse } = require('querystring');

const hostname = "127.0.0.1";
const port = 3000;

const server = http
    .createServer((req,res) => {
        if(req.url === "/" && req.method === "GET"){
            res.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream('./index.html').pipe(res);
        } else if(req.url === "/" && req.method === "POST") {
            res.writeHead(200, {"Content-Type": "text/html"});
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                let parsedInfo = parse(body);
                var num1 = parseInt(parsedInfo.num1);
                var num2 = parseInt(parsedInfo.num2);
                var sum = num1 + num2;
                res.write(`The sum of the numbers is ${sum}`);
                res.end();
            });
        } else if(req.url === '/bmicalculator' && req.method === 'GET') {
            res.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream('./bmiCalculator.html').pipe(res);
        } else if(req.url === '/bmicalculator' && req.method === 'POST') {
            res.writeHead(200, {"Content-Type": "text/html"});
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                let parsedInfo = parse(body);
                var height = parseFloat(parsedInfo.height);
                var weight = parseFloat(parsedInfo.weight);
                var bmi = weight / (height*height);
                res.write(`Your BMI is ${bmi}`);
                res.end();
            })
        }
        
        
        else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write('<h1>Page not found</h1>');
            res.end();
        }
    })
    .listen(3000, () => {
        console.log(`Server listening on port ${port}`)
    })





// const server = http
//     .createServer((req,res) => {
//         fs.readFile('./index.html', (err,html) => {
//             if(err) throw err;
//             else {
//                 res.writeHeader(200, {"Content-Type": "text/html"});
//                 res.write(html);
//                 res.end();
//             }
//         })
//     })
//     .listen(3000,
//         console.log(`Server running at http://${hostname}:${port}/`)
//     );
