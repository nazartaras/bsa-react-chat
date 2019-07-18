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
  let obj = JSON.parse(fs.readFileSync('./bin/users.json', 'utf8'));
  obj.push(user);
  write('./bin/users.json', obj);
  return true;
}
}

const updateUser= (id, update) => {
  let obj = JSON.parse(fs.readFileSync('./bin/users.json', 'utf8'));
  console.log(update)
  console.log(id)
  obj =  obj.map(el=>{
      if(el.id === id){
        el = update
      }
      return el;
    })
    write('./bin/users.json', obj);
    return true;
  }
 

const deleteUser = (id) =>{
  console.log(id)
    let obj = JSON.parse(fs.readFileSync('./bin/users.json', 'utf8'));
  let index = obj.findIndex((el)=>el.id===id);
  if(index===-1)
  return false;
  else{
    obj.splice(index,1);
    write('./bin/users.json', obj);
    return true;
  }
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