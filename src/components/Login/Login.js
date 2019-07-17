import React from 'react';
import './login.css'
import * as actions from './actions'
import { connect } from 'react-redux';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleLogIn = this.handleLogIn.bind(this)
    }
   componentWillReceiveProps(nextProps, prevState) {
        if (nextProps.userName !== '') {
            if(nextProps.userType==='admin'){
                this.props.history.push('/adminPage');
            }else
            this.props.history.push('/chat');
        }
    }

    handleLogIn(){
        let userData = {login: document.getElementById('login').value, password: document.getElementById('password').value }
        let response = this.props.loginUser(userData);
        if(this.props.userName!==''){
        if(this.props.userType==='admin'){
            this.props.history.push('/adminPage');
        }else
        this.props.history.push('/chat');
    }}
    render(){
        return <div className="wrapper_form">
            <div style={{textAlign: "center"}}>
                            <h2  style={{color:"#4dd0c8"}}>Вхід</h2>
                        </div>
                        <br/>
                        <input id="login" type="email" name="email" className="form-control"placeholder="Введіть email" required/>
                        <br/>
                        <input id="password" type="password" name="password" className="form-control"placeholder="Введіть пароль" required/>
                        <input type="hidden" name="timezone" id="tz"/>
                        <br/>
                        <div style={{textAlign: 'center'}}>
                            <button  name="do_login" class="buttons" id="logIn" onClick={this.handleLogIn}>Увійти</button>
                        </div>
                        </div>
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        userName: state.login.userName,
        userType: state.login.userType
	}
};

const mapDispatchToProps = {
	...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);