import * as React from "react";
import Message from "../Message/Message";

class MessagesBox extends React.Component{
    render(){
        let previousMessageDate;
        let currentMessageDate;
        let last = false;
        const messagesForThisDay = this.props.messagesForMessageBox.map((el, index)=> {
            if(index===this.props.messagesForMessageBox.length - 1)
            last=true;
            currentMessageDate=el.created_at.split(' ')[0];
            if(currentMessageDate!==previousMessageDate){
                previousMessageDate = currentMessageDate;
               return <Message messageCurrent={el} isLast={last} onEdit={this.props.editHandler} onDelete={this.props.deleteHandler} onLike={this.props.likeHandler} messagesSameDate={currentMessageDate} key={index} bordered={true}/>
            }
            return <Message messageCurrent={el}  isLast={last} onEdit={this.props.editHandler} onDelete={this.props.deleteHandler} onLike={this.props.likeHandler}  key={index} bordered={false}/>
        });
        return   <div className='message-box'>
            {
                messagesForThisDay
            }
        </div>
    }
}
export default MessagesBox;