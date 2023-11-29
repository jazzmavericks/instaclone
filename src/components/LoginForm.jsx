import { writecookie } from "../utils/utilities";
import instaLogo from '../images/insta_logo_white.png';
import loginImage from '../images/loginScreenImage.jpg';
import { Link, Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import '../pages/login.css';
import { useState } from "react";

function LoginForm(props) {
    const [password, setPassword] = useState() 
    const navigate = useNavigate()
    async function sendLoginToBackEnd(email, password, setLoggedIn, setRegistered) {
        try {
            const response = await fetch(
                "https://end-user-api2.onrender.com/loginUser",
                {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            )
            const data = await response.json();
            console.log(data.token);
            writecookie("jwt_token",data.token,7);
            setLoggedIn(true);
            setRegistered(true);
            navigate("/main");
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendLoginToBackEnd(props.email, password, props.setLoggedIn, props.setRegistered)
    }
     console.log(props.email)
    return (
        <div className="forms-container">
            <div className="loginPicture">
                <img className="loginImage" src={loginImage} alt="Login Image" />                
            </div>
            <div className="login-section">
                <img className="logoWhite" src={instaLogo} alt="Instagram Logo" /> 
                <form onSubmit={handleSubmit}>
                    <input className="emailbox" type="text" id="email" placeholder="Phone number, username or email address" required onChange = {(event) => props.setEmail(event.target.value)}></input>
                    <br></br>
                    <input className="passwordbox" type="text" id="password" placeholder="Password" required onChange = {(event) => setPassword(event.target.value)}></input>
                    <br></br>
                    Don't have an account? <Link className="registerLink" to = "/register">Register here.</Link>
                    <input type="Submit" value="Log in" />
                </form>
            </div>
        </div>
    )
};

export default LoginForm;