var http = require("http");

//TODO - Use Employee Module here
var employeeModule = require("./Employee");

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 3000

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    if (req.method !== "GET") {
        res.statusCode = 405;
        return res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    }

        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.setHeader("Content-Type", "text/html");
            return res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            return res.end(JSON.stringify(employeeModule.getAllEmployees()));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            return res.end(JSON.stringify(employeeModule.getEmployeeNames()));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            return res.end(JSON.stringify({ total_salary: employeeModule.getTotalSalary() }));  
    }
    res.statusCode = 404;
    res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})