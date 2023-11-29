import React, { useEffect, useState } from 'react';
import './App.css';
import Register from './components/register';

function Register(props) {
    const [password, setPassword] = useState("");
   
    return (

        <div>
            {!props.loggedIn && <div className="forms-container">
            {!props.loggedIn && <Register
                setEmail={props.setEmail}
                email={props.email}
                setPassword={setPassword}
                password={password} 
                setLoggedIn={props.setLoggedIn}>
            </Register>}
            </div>}
  </div>)
}

export default Register;