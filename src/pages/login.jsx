import React, { useState } from 'react';
import './login.css';
import LoginForm from './components/loginForm';


function Login(props) {
    const [password, setPassword] = useState("");
   
    return (
        <div>
            {!loggedIn && <div className="forms-container">
            {!loggedIn && <LoginForm
                setEmail={props.setEmail}
                email={props.email}
                setPassword={setPassword}
                password={password}
                setLoggedIn={props.setLoggedIn}>  
            </LoginForm>}
            </div>}
  </div>)
}

export default Login;