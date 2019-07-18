const { getMessages, getMessageById } = require('../services/chat.service')
const { addNewMessage, editMessageById } = require("../repositories/chat.repository")
var express = require('express');
var router = express.Router();

var returnRouter = function(io) {
router.get('/', function(req, res, next){
  const result = getMessages();
  res.send(result);
})
router.post('/', function(req,res,next){
  const result = addNewMessage(req.body);
  io.sockets.emit('new-message', result);
  res.send(result);
})
router.get('/edit/:id',function(req,res,next){
  const id = req.params.id;
  const result = getMessageById(id); 
  res.send(result);
})
router.put('/edit/:id',function(req,res,next){
  const id = req.params.id;
  const newText = req.body;
  const result = editMessageById(id, newText); 
  res.send(result);
})
return router;
}

module.exports = returnRouter; 