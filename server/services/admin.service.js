const { saveData } = require("../repositories/admin.repository");
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
*/
const getUsers = () =>{
  let obj = JSON.parse(fs.readFileSync('./bin/users.json', 'utf8'));
  return obj;
};

const getUserById = (usId) =>{
  console.log(usId);
  let obj = JSON.parse(fs.readFileSync('./bin/users.json', 'utf8'));
  let user = obj.find(el=>el.id===usId);
  return user;
};
const checkUser = (data) => {
  const userList = JSON.parse(fs.readFileSync('./bin/users.json', 'utf8'));
  let currentUser = userList.find((el)=>el.login===data.login);
  if (currentUser){
    if(currentUser.password == data.password)
    return currentUser;
  }
  return false;
}
module.exports = {
  checkUser,
  getUsers,
  getUserById
};