const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
//regist public folder
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(3000, () => {
  console.log('server start at port 3000');
})

app.get("/", (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
})
// app.get("/", (request, response)=> {
//   response.json({
//     name: 'quanbh',
//     descrition: 'Handsome max'
//   })
// })