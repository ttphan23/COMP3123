const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const userRouter = require('./routes/users');

// Middleware for parsing JSON request body
app.use(express.json());

// Add User Router
app.use('/api/v1/user', userRouter);

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (req, res) => {
  const filePath = path.join(__dirname, 'home.html');
  console.log("Looking for file at:", filePath);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending home.html:", err);
      res.status(500).send("Could not load home.html");
    }
  });
});


/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});
