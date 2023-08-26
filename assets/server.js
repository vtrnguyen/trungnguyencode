const http = require('http');

const server = http.creatServer((req, ses) => {
    console.log('run request ...')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello World!</h3>');
    res.write('<h2>from Trung Nguyen & Hoc lam Dev</h2>')
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Node.JS server is running on port: 3000');
})