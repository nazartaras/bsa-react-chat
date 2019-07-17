const fs = require('fs');

const saveData = (data) => {
  // код по сохранению данных в БД
  if (data) {
    console.log(`${data} is saved`);
    return true;
  } else {
    return false;
  }
}

const createUser= (user) => {
  if (isEmptyObject(user)){
    return false;
  }
  else{
  let obj = JSON.parse(fs.readFileSync('./bin/userlist.json', 'utf8'));
  obj.push(user);
  write('./bin/userlist.json', obj);
  return true;
}
}

const updateUser= (id, update) => {
  let obj = JSON.parse(fs.readFileSync('./bin/userlist.json', 'utf8'));
  for(let i =0; i<obj.length; i++){
    if(obj[i]._id == id){
      obj[i]=update;
      write('./bin/userlist.json', obj);
      return true;
    }
    }
    return false;
  }
 

const deleteUser = (id) =>{
  let obj = JSON.parse(fs.readFileSync('./bin/userlist.json', 'utf8'));
  for(let i =0; i<obj.length; i++){
    if(obj[i]._id == id){
      obj.splice(i,1);
      write('./bin/userlist.json', obj);
      return true;
    }
  }
  return false;
}

function write(path, obj){
  let json = JSON.stringify(obj);
  fs.writeFile(path, json, 'utf8',(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

function isEmptyObject(obj) {
  for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          return false;
      }
  }
  return true;
}

module.exports = {
  saveData,
  createUser,
  updateUser,
  deleteUser
};