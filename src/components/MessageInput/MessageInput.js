import * as React from "react";
import "./messageinput.css"

const MessageInput =({handleClick})=>{
        return <div className='message-input-box'>
            <input id="messages-input" className="message-input" />
            <button className="send-btn" onClick={handleClick}>Send</button>
        </div>
}
export default MessageInput;