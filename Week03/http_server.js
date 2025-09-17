const http = require('http');
const student = require('./modules/students'); // local module

const SERVER_PORT = 3000;
const SERVER_HOST = 'localhost'; // 127.0.0.1

// console.log(http)
const server = http.createServer((req, res) => {
    console.log(req.method); // GET, POST, PUT, DELETE
    console.log(req.url);
    //console.log(res)
    if(req.method !== 'GET') {
        if(req.url === '/') { http://localhost:3000/
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Hello, World!</h1>');
        } else if(req.url === '/about') { //http://localhost:3000/about
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>About Us</h1><p>This is the about page.</p>');
        } if(req.url === '/students') { //http://localhost:3000/students
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'application/json');
            const studentsList = student.getStudents(); // Call the function to get students
            res.end(JSON.stringify(studentsList)); // Convert JS object to JSON string
        }else {
            res.statusCode = 404; // Not Found
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        }
    } 
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
});