import { writecookie } from "../utils/utilities";
import instaLogo from '../images/insta_logo_white.png';
import {useNavigate} from 'react-router-dom';
import '../pages/register.css';

function Register(props) {
    const navigate = useNavigate()
    async function sendRegisterToBackEnd(email, password, setLoggedIn, setRegistered) {
        try {
            const response = await fetch(
                "https://end-user-api2.onrender.com/register",
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
            setLoggedIn(false);
            setRegistered(true);
            navigate ("/main"); 
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendRegisterToBackEnd(props.email, props.password, props.setLoggedIn, props.setRegistered)
    }
     console.log(props.email)
    return (
        <div className="register-section">
        <img className="logoWhite" src={instaLogo} alt="Instagram Logo" />
        <p>Sign up to see photos and videos from your friends</p>
        <form onSubmit={handleSubmit}>
            <input className="emailbox" type="text" id="email" placeholder="Phone number, username or email address" required onChange={(event) => props.setEmail(event.target.value)}></input>
            <br />
            <input className="passwordbox" type="text" id="password" placeholder="Password" required onChange={(event) => props.setPassword(event.target.value)}></input>
            <br />
            <p className="regText">People who use our service may have uploaded your contact information to Instagram. Learn more</p>
            <p className="regText">By signing up, you agree to our Terms. Learn how we collect, use and share your data in our Privacy Policy and how we use cookies and similar technology in our Cookies Policy.</p>
            <input type="submit" />
        </form>
        </div>
    )
};

export default Register;