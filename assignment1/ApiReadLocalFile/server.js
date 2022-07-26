const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    if(req.url == '/vegetables') {
        const file = fs.readFileSync('./vegetables.json', 'utf8');
        console.log(file);
        res.write(file);
    } else {
        res.write('wrong url');
    }
    res.end();
}).listen(4000);