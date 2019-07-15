import * as React from "react";
import './header.css'

class Header extends React.Component{
    render() {
        return <header className='header'>
            <span className='chatName'>MyChat</span>
            <span className='participantsCount'>{this.props.participantsNumber} participants</span>
            <span className='messagesCount'>{this.props.messagesNumber} messages</span>
            <span className='lastMessageDate'>last message: {this.props.lastMessage}</span>
        </header>
    }

}
export default Header;