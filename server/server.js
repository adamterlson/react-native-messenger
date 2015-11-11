var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

var messages = [];

var router = express.Router();
router.get('/', function (req, res) {
  if (messages.length > 0) {
    console.log(messages);
  }
  res.json(messages);
});

router.post('/', function (req, res) {
  console.log('POST', req.body);
  if (req.body && req.body.author && req.body.text) {
    messages.push(req.body);
  }
  res.json(req.body);
});

app.use(bodyParser.json());
app.use(function (req, res, next) {
  /*
  console.log(req.method + ' ' + req.url);
  console.log(req.body);
  */
  next();
});
app.use(router);
