import * as React from "react";
import Header from "../Header/Header"
import MessagesBox from "../MessagesBox/MessagesBox"
import MessageInput from"../MessageInput/MessageInput"
import { messageService } from "../../javascript/services/messageService"
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import * as actions from './actions';
import { showPage, setCurrentMessageId } from '../MessageEditModal/actions'
import './chat.css'

class Chat extends React.Component{
    constructor(props){
        super(props);
        this.handleSendClick = this.handleSendClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleLikeMessage = this.handleLikeMessage.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }
    async componentDidMount() {
        let messages = await messageService.getMessages('GET');
        this.props.getUsers(messages);
        window.addEventListener('keydown',(ev)=>{
            if(ev.keyCode===38&&this.props.messages[this.props.messages.length-1].user==='me'){
                this.handleEditClick(this.props.messages[this.props.messages.length-1].id);
            }
        })
    }
    compare(a1, a2) {
            return a1.length === a2.length && a1.every((v,i)=>v === a2[i])
    }
    countUniqueParticipants(array){
        let userNames = array.map((elem)=>{
            return elem.user;
        })
        let uniqueUserNames = userNames.filter((value,index,self)=>{
            return self.indexOf(value) === index;
        })
        return uniqueUserNames;
    }
    handleSendClick(){
        if(document.getElementById('messages-input').value!==''){
        let today = new Date();
        let formated_today = today.toLocaleString("uk-UA");
        let newMessage = {
            id: this.props.messages[this.props.messages.length-1].id+1,
            user: "me",
            avatar: "",
            created_at: formated_today,
            message: document.getElementById('messages-input').value,
            marked_read: false
        }
        this.props.sendMessage(newMessage);
        }
    }

   handleDeleteClick(id){
        this.props.deleteMessage(id);
    }

    handleLikeMessage(id){
        this.props.likeMessage(id);
    }
    handleEditClick(id){
        let currMessageText = this.props.messages.find(el=> el.id===id).message;
        this.props.setCurrentMessageId(id, currMessageText);
        this.props.showPage();

    }

    render() {
        return this.compare(this.props.messages,[])?<Loading/>:
        <div className='chatSpace'>
            <Header participantsNumber={this.countUniqueParticipants(this.props.messages).length} messagesNumber={this.props.messages.length} lastMessage={this.props.messages[this.props.messages.length-1].created_at}/>
            <MessagesBox messagesForMessageBox={this.props.messages} editHandler={this.handleEditClick} deleteHandler={this.handleDeleteClick} likeHandler={this.handleLikeMessage}/>
            <MessageInput handleClick = {this.handleSendClick}/>
        </div>
    }
}
const mapStateToProps = (state) =>{
    return{
        messages: state.chat
    }
};
const mapDispatchToProps={
    ...actions,
    showPage,
    setCurrentMessageId
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);