import io from 'socket.io-client';
    import  * as actions from "./actions";

const socket = io.connect('http://localhost:8000');

socket.on('new-message', payload=>{
    console.log('dasdas')
    actions.fetcMessages(payload.data);
})