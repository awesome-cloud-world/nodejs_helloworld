var express = require('express')
var app = express()
const {welcome} = require('./welcome.js')

const PORT = 3000

app.get('/', function (req, res) {
  res.send(welcome.message())
})
app.listen(3000, function(){
  console.log(`Listening to PORT: ${PORT}`);
});