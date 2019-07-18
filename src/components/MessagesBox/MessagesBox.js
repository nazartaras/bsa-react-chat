import * as React from "react";
import Message from "../Message/Message";

const MessagesBox =({messagesForMessageBox, currentUser, editHandler, deleteHandler, likeHandler})=>{
        let previousMessageDate;
        let currentMessageDate;
        let last = false;
        const messagesForThisDay = messagesForMessageBox.map((el, index)=> {
            if(index===messagesForMessageBox.length - 1)
            last=true;
            currentMessageDate=el.created_at.split(' ')[0];
            if(currentMessageDate!==previousMessageDate){
                previousMessageDate = currentMessageDate;
               return <Message currentUser={currentUser} messageCurrent={el} isLast={last} onEdit={editHandler} onDelete={deleteHandler} onLike={likeHandler} messagesSameDate={currentMessageDate} key={index} bordered={true}/>
            }
            return <Message currentUser={currentUser} messageCurrent={el}  isLast={last} onEdit={editHandler} onDelete={deleteHandler} onLike={likeHandler}  key={index} bordered={false}/>
        });
        return   <div className='message-box'>
            {
                messagesForThisDay
            }
        </div>
    }
export default MessagesBox;