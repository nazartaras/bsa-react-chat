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

class Message extends React.Component {
    render() {
        return <div key={this.props.keyValue}>
            {(() => {
                if (this.props.bordered) {
                    return <div className="bordered" >
                        <div className="line"></div>
                        <div className="date-wrp">
                            <span className="date">{this.props.messagesSameDate}</span></div></div>
                }
            })()}
            <div className="message">
                {(() => {
                    if (this.props.messageCurrent.user !== "me") {
                        return <div className='avatar-wrp'><img className='avatar' src={this.props.messageCurrent.avatar} alt="author" /></div>
                    }
                })()}
                <div className='message-info'>
                    <div className='message-text'  >{this.props.messageCurrent.message}</div>
                    {(() => {
                        if (this.props.messageCurrent.user !== "me") {
                            return this.props.messageCurrent.marked_read?<button className="like-button"  style={likedStyle} onClick={()=>{this.props.onLike(this.props.messageCurrent.id)}}><i className="fa fa-heart like-icon" /></button>:<button className="like-button" style={notLikedStyle} onClick={()=>{this.props.onLike(this.props.messageCurrent.id)}}><i className="fa fa-heart like-icon" /></button>
                        }
                    })()}
                    {(() => {
                        console.log(this.props.isLast)
                        if (this.props.messageCurrent.user === "me") {
                            return <span>
                                <button className="btn btn-primary" style={{display: this.props.isLast?'inline-block':'none'}} onClick={() => this.props.onEdit(this.props.messageCurrent.id)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.messageCurrent.id)}><i className="fas fa-trash-alt"></i></button>
                            </span>
                        }
                    })()}
                    <span className='message-date'>{this.props.messageCurrent.created_at}</span>
                </div>
            </div>
        </div>
    }
}
export default Message;