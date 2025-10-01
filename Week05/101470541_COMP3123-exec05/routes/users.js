const express = require('express');
const path = require('path');
const fs = require('fs');

const routerUser = express.Router();

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../user.json'));
  res.json(JSON.parse(data));
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req, res) => {
  const { username, password } = req.body;
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../user.json')));

  if (username !== data.username) {
    return res.json({ status: false, message: 'User Name is invalid' });
  }
  if (password !== data.password) {
    return res.json({ status: false, message: 'Password is invalid' });
  }
  return res.json({ status: true, message: 'User Is valid' });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;
