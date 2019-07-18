import * as React from "react";
import "./message.css"
const likedStyle = {
    background: 'none',
    border: 'none',
    color: 'red',
    outline: 'none',
    marginTop: '1em'
}
const notLikedStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    outline: 'none',
    marginTop: '1em'
}

const Message = ({keyValue, bordered, messagesSameDate, messageCurrent, currentUser, onLike, isLast, onEdit, onDelete})=> {
        return <div key={keyValue}>
            {(() => {
                if (bordered) {
                    return <div className="bordered" >
                        <div className="line"></div>
                        <div className="date-wrp">
                            <span className="date">{messagesSameDate}</span></div></div>
                }
            })()}
            <div className="message">
                {(() => {
                    if (messageCurrent.user !== currentUser) {
                        return <div className='avatar-wrp'><img className='avatar' src={messageCurrent.avatar} alt="author" /></div>
                    }
                })()}
                <div className='message-info'>
                    <div className='message-text'  >{messageCurrent.message}</div>
                    {(() => {
                        if (messageCurrent.user !== currentUser) {
                            return messageCurrent.marked_read?<button className="like-button"  style={likedStyle} onClick={()=>{onLike(messageCurrent.id)}}><i className="fa fa-heart like-icon" /></button>:<button className="like-button" style={notLikedStyle} onClick={()=>{onLike(messageCurrent.id)}}><i className="fa fa-heart like-icon" /></button>
                        }
                    })()}
                    {(() => {
                        console.log(isLast)
                        if (messageCurrent.user === currentUser) {
                            return <span>
                                <button className="btn btn-primary"  onClick={() => onEdit(messageCurrent.id)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => onDelete(messageCurrent.id)}><i className="fas fa-trash-alt"></i></button>
                            </span>
                        }
                    })()}
                    <span className='message-date'>{messageCurrent.created_at}</span>
                </div>
            </div>
        </div>
    }

export default Message;