import React, { useEffect, useState } from 'react';
import './register.css';
import RegisterForm from './components/registerForm';

function Register(props) {
    const [password, setPassword] = useState("");
   
    return (

        <div>
            {!props.loggedIn && <div className="forms-container">
            {!props.loggedIn && <RegisterForm
                setEmail={props.setEmail}
                email={props.email}
                setPassword={setPassword}
                password={password} 
                setLoggedIn={props.setLoggedIn}>
            </RegisterForm>}
            </div>}
  </div>)
}

export default Register;