const fs = require('fs');

const addNewMessage=(mess)=>{
    let messages = JSON.parse(fs.readFileSync('./bin/messages.json', 'utf8'));
    messages.push(mess);
    write('./bin/messages.json', messages);
    console.log(messages)
    return messages;
}
const editMessageById=(id,text)=>{
  let messages = JSON.parse(fs.readFileSync('./bin/messages.json', 'utf8'));
  messages = messages.map(el=>{
    if(el.id==id){
      el.message = text.text;
    }
    return el;
  })
  write('./bin/messages.json', messages);
  return messages;
}
const deleteMessage=(id)=>{
  let messages = JSON.parse(fs.readFileSync('./bin/messages.json', 'utf8'));
  let index = messages.findIndex((el)=>el.id===id);
  if(index===-1)
  return false;
  else{
    messages.splice(index,1);
    write('./bin/messages.json', messages);
    return messages;
  }
}
function write(path, obj){
    let json = JSON.stringify(obj);
    fs.writeFile(path, json, 'utf8',(err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }

  
module.exports={
    addNewMessage,
    editMessageById,
    deleteMessage
}