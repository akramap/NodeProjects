const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
/* fetch the content from files */
/* for full file path use path.join()*/  
const index = fs.readFileSync(path.join(__dirname,'index.html'))
const about = fs.readFileSync(path.join(__dirname,'about.html'))
const contact = fs.readFileSync(path.join(__dirname,'contact.html'))
const home = fs.readFileSync(path.join(__dirname,'home.html'));


const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(index);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/home'){
        res.end(home);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
