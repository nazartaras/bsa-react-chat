import * as React from "react";
import Header from "../Header/Header"
import MessagesBox from "../MessagesBox/MessagesBox"
import MessageInput from"../MessageInput/MessageInput"
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import * as actions from './actions';
import { setCurrentMessageId } from '../MessageEditModal/actions'
import './chat.css'

class Chat extends React.Component{
    constructor(props){
        super(props);
        this.handleSendClick = this.handleSendClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleLikeMessage = this.handleLikeMessage.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }
    componentDidMount() {
        //let messages = await messageService.getMessages('GET');
        this.props.getMessages();
        window.addEventListener('keydown',(ev)=>{
            console.log('ds')
            if(ev.keyCode===38&&this.props.messages[this.props.messages.length-1].user===this.props.userName){
                this.handleEditClick(this.props.messages[this.props.messages.length-1].id);
            }
        })
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
            user: this.props.userName,
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
        this.props.history.push(`chat/edit/${id}`)
    }

    render() {
        return this.props.isLoading?<Loading/>:<div className='chatSpace'>
            <Header participantsNumber={this.countUniqueParticipants(this.props.messages).length} messagesNumber={this.props.messages.length} lastMessage={this.props.messages[this.props.messages.length-1].created_at}/>
            <MessagesBox currentUser={this.props.userName} messagesForMessageBox={this.props.messages} editHandler={this.handleEditClick} deleteHandler={this.handleDeleteClick} likeHandler={this.handleLikeMessage}/>
            <MessageInput handleClick = {this.handleSendClick}/>
        </div>
    }
}
const mapStateToProps = (state) =>{
    console.log(state.chat)
    return{
        userName: state.login.userName,
        messages: state.chat.messages,
        isLoading: state.chat.isLoading
    }
};
const mapDispatchToProps={
    ...actions,
    setCurrentMessageId
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);