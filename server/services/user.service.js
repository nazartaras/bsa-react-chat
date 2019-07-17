const { saveData } = require("../repositories/user.repository");
const fs = require('fs');
/*
const getName = (user) => {
  if (user) {
    return user.name;
  } else {
    return null;
  }
};

const saveName = (user) => {
  if (user) {
    return saveData(user.name);
  } else {
    return null;
  }
};

const getUsers = () =>{
  let obj = JSON.parse(fs.readFileSync('./bin/userlist.json', 'utf8'));
  let users = [];
  for(let i =0; i<obj.length; i++){
    users.push(obj[i].name);
    
  }
  return users;
};

const getUserById = (usId) =>{
  let obj = JSON.parse(fs.readFileSync('./bin/userlist.json', 'utf8'));
  let user;
  for(let i =0; i<obj.length; i++){
    if(obj[i]._id == usId){
      user = obj[i];
      return user;
    }
  }
  return false;
};*/
const checkUser = (data) => {
  const userList = JSON.parse(fs.readFileSync('./bin/users.json', 'utf8'));
  let currentUser = userList.find((el)=>el.login===data.login);
  if (currentUser){
    if(currentUser.password == data.password)
    console.log(currentUser)
    return currentUser;
  }
  return false;
}
module.exports = {
  checkUser
};