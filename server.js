const http = require('http');
const fs = require('fs')
const HTMLTemplate = require('/Users/ms/Desktop/VSCODE/my_project_callinder-1/server.js')

const contentType = {'contentType' : 'text/html; charset=utf-8'};

http.createServer(function(req, res) {
  if(req.method === 'GET' && req.url === '/') {

  res.writeHead(200, contentType);
  fs.readFile('login.html',(err,data) => {
    if(err) {
      console.log('파일을 불러 올 수 없습니다.')
    } else {
      res.end(data)
    }
  })
  
} else {
    res.writeHead(404, contentType);
    res.end("<h1>해당 페이지를 찾을 수 없습니다.</h1>")
  }
}).listen(8080);


// let Main = {}
// let sub = {}