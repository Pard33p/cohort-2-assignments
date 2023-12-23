/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/files', (req, res) => {
  fs.readdir('files', (err, files) => {
    if(err) {
      console.log('No files directory found');
      res.status(500).send('No such route exists');
    }
    res.json(files);
  });
});

app.get('/file/:filename', (req, res) => {
  const filename = req.params.filename;
  fs.readFile(`files/${filename}`, 'utf8', (err, content) => {
    if(err) {
      console.log(`No such file named ${filename}`);
      res.status(404).send('File not found');
    }
    res.send(content);
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Route not found');
});

module.exports = app;