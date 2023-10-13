const http = require('http');
const fs = require('fs')

const contentType = {
  'contentType' : 'text/html; charset=utf-8'};

// http.createServer(function(req, res) {
  

//   //작성법 이유 알아보기.(검색 해보기)

//   res.writeHead(200,Login);
//   res.end()
// }).listen(1010); 

let Main = {}
let sub = {}