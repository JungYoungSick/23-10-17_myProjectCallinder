const http = require('http');
const fs = require('fs')
const HTMLTemplate = require('/Users/ms/Desktop/VSCODE/my_project_callinder-1/server.js')

const contentType = {'contentType' : 'text/html; charset=utf-8'};

http.createServer(function(req, res) {
  //서버를 구동시키는 if문
  if(req.method === 'GET' && req.url === '/') {
  res.writeHead(200, contentType);
  //readFile을 작업 할 경우 git 폴더 안 폴더도 경로 설정을 지정해줘야 한다.
  fs.readFile('./Login/login.html',(err,data) => {
    //파일을 불러 올 경우의 에러를 표시해주는 if문
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