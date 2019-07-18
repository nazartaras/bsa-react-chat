import * as React from "react";
import './header.css'

const Header = ({participantsNumber, messagesNumber, lastMessage})=>{
        return <header className='header'>
            <span className='chatName'>MyChat</span>
            <span className='participantsCount'>{participantsNumber} participants</span>
            <span className='messagesCount'>{messagesNumber} messages</span>
            <span className='lastMessageDate'>last message: {lastMessage}</span>
        </header>
    

}
export default Header;