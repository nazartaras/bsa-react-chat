import * as React from "react";
import "./messageinput.css"

class MessageInput extends React.Component {
    render() {

        return <div className='message-input-box'>
            <input id="messages-input" className="message-input" />
            <button className="send-btn" onClick={this.props.handleClick}>Send</button>
        </div>
    }
}
export default MessageInput;