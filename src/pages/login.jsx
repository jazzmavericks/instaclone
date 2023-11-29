import React, { useState } from 'react';
import './login.css';
import Login from './components/login';


function Main(props) {
    const [password, setPassword] = useState("");
   
    return (
        <div>
            {!loggedIn && <div className="forms-container">
            {!loggedIn && <Login
                setEmail={props.setEmail}
                email={props.email}
                setPassword={setPassword}
                password={password}
                setLoggedIn={props.setLoggedIn}>  
            </Login>}
            </div>}
  </div>)
}

export default Login;