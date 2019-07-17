import React from 'react';
import Chat from './Chat/Chat'
import UserList from './users/index';
import UserPage from './userPage/index';
import Login from './Login/Login';
import { Switch, Route } from 'react-router-dom';
import MessageEditModal from './MessageEditModal/index'


function App (){
    return (
        <div className="App">
          <Switch>
          <Route exact path='/' component={Login}/> 
          <Route exact path='/chat' component={Chat}/>
          <Route path='/chat/edit/:id' component={MessageEditModal}/>
          <Route exact path="/adminPage" component={UserList} />
          <Route exact path="/adminPage/uset" component={UserPage} />
				  <Route path="/adminPage/uset/:id" component={UserPage} />
          </Switch>
        </div>
      );
}
export default App;