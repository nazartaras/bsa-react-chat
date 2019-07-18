var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
var indexRouter = require('./routes/index');
var chatRouter = require('./routes/chat')(io);
var adminRouter = require('./routes/admin')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/chat', chatRouter);
app.use('/adminPage', adminRouter);
io.listen(8000)
io.on('connection', function (socket) {

})
module.exports = app;
