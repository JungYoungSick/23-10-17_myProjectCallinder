const http = require('http');
const fs = require('fs')
const url = require('url')
const HTMLTemplate = require('/Users/ms/Desktop/VSCODE/my_project_callinder-1/mainServer.js')

const contentType = {'contentType' : 'text/html; charset=utf-8'};

http.createServer(function(req, res) {
  //서버를 구동시키는 if문
  if(req.method === 'GET' && req.url === '/') {
  res.writeHead(200, contentType);
  //readFile을 작업 할 경우 git 폴더 안 폴더도 경로 설정을 지정해줘야 한다.
  fs.readFile('./Mainpage/Main.html',(err,data) => {
    //파일을 불러 올 경우의 에러를 표시해주는 if문
    if(err) {
      console.log('파일을 불러 올 수 없습니다.')
    
    } else {
      res.end(data)
    }})}
    if (req.url === '/main.css') {
      fs.readFile('/Mainpage/Main.css', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.write('404 Not Found');
          return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        return res.end();
      });
      // 해당 코드는 CSS가 적용이 되지 않아 작성한 IF문이다.
      // 작성을 했음에도 불구하고 CSS가 적용되지 않았다.
      // 서버에 대해 좀더 알아 봐야 겠다.
  
} else {
    res.writeHead(404, contentType);
    res.end("<h1>해당 페이지를 찾을 수 없습니다.</h1>")
  }
}
).listen(7070);


// let Main = {}
// let sub = {}