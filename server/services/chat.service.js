const fs = require('fs');

const getMessages = ()=>{
    const messages = JSON.parse(fs.readFileSync('./bin/messages.json', 'utf8'));
    return messages;
}
const getMessageById=(id)=>{
    const messages = JSON.parse(fs.readFileSync('./bin/messages.json', 'utf8'));
    const currMessage = messages.filter((el)=>el.id==id);
    return currMessage;
}

module.exports = {
    getMessages, 
    getMessageById
}