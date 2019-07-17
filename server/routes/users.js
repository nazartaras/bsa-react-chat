var express = require('express');
var router = express.Router();

const { createUser, updateUser, deleteUser } = require("../repositories/user.repository")
const { getUsers, saveName, getUserById } = require("../services/user.service");
const { isAuthorized } = require("../middlewares/auth.middleware");


//get array of all usernames 
router.get('/', function(req, res, next){
  const result = getUsers();
  res.send(result);
});
//get one user info by id
router.get('/:id', function(req, res, next){
  const id = req.params.id;
  const result = getUserById(id);
  if(result)
  res.send(result);
  else
  res.status(404).send(`User not found`);
});
//register new user and save info to userlist.json
router.post('/', function(req, res, next){
  const newUser = createUser(req.query);
  if(newUser)
  res.send("User created successfully");
  else
  res.status(400).send(`Not enough information`);
});

//get user by id and update info about him and write back to userlist.json 
router.put('/:id', function(req, res, next){
  const result = updateUser(req.query.id, req.query);
  if(result)
  res.send("User updated successfully");
  else
  res.status(404).send(`User not found`);
});
//delete user by id
router.delete('/:id', function(req, res, next){
  const result = deleteUser(req.query.id);
  if(result)
  res.send("User deleted successfully");
  else
  res.status(404).send(`User not found`);
});


module.exports = router;
