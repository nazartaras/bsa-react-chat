var express = require('express');
const { checkUser } = require("../services/admin.service");
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Express");
});
router.post('/', function(req, res, next){
  let userData = req.body;
  let userChecked = checkUser(userData);
  if(userChecked){
  console.log(userData)
  res.send(userChecked)}
  else
  res.status(404).send(`User not found`);
})

module.exports = router;
