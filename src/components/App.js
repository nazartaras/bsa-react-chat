import React from 'react';
import Chat from './Chat/Chat'
import MessageEditModal from './MessageEditModal/index'


function App (){
    return (
        <div className="App">
          <Chat/>
          <MessageEditModal/>
        </div>
      );
}
export default App;