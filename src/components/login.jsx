import { writecookie } from "../utils/utilities";
import instaLogo from '../images/insta_logo_white.png';
import { Link, Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Login(props) {
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
        sendLoginToBackEnd(props.email, props.password, props.setLoggedIn, props.setRegistered)
    }
     console.log(props.email)
    return (
        <div className="login-section">
            <img className="logoWhite" src={instaLogo} alt="Instagram Logo" /> 
            <form onSubmit={handleSubmit}>
                <input className="emailbox" type="text" id="email" placeholder="Phone number, username or email address" required onChange = {(event) => props.setEmail(event.target.value)}></input>
                <br></br>
                <input className="passwordbox" type="text" id="password" placeholder="Password" required onChange = {(event) => props.setPassword(event.target.value)}></input>
                <br></br>
                <Link className="registerLink" to = "/register">Don't have a login? Register here.</Link>
                <input type="submit" />
            </form>
        </div>
    )
};

export default Login;