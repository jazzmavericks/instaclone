import React, { useState } from 'react';
import './login.css';
import LoginForm from './components/loginForm';


function Login(props) {

    const { loggedIn } = props;
    const [password, setPassword] = useState("");
   
    return (
        <div className="login">
            {!loggedIn && 
                <div>
                        <LoginForm
                            setEmail={props.setEmail}
                            email={props.email}
                            setPassword={setPassword}
                            password={password}
                            setLoggedIn={props.setLoggedIn}>  
                        </LoginForm>
                </div>
            }
        </div>
    )
}

export default Login;