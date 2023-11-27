import { writecookie } from "../utils/utilities";

function Login(props) {
    async function sendLoginToBackEnd(email, password, setLoggedIn, setRegistered) {
        try {
            const response = await fetch(
                "http://localhost:5001/loginUser",
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
        <div class="login-section">
            <h2>Login to Account</h2>
            <form onSubmit={handleSubmit}>
                <label for="email">Enter your email</label>
                <input className="emailbox" type="text" id="email" required onChange = {(event) => props.setEmail(event.target.value)}></input>
                <br></br>
                <label for="password">Enter your password</label>
                <input className="passwordbox" type="text" id="password" required onChange = {(event) => props.setPassword(event.target.value)}></input>
                <br></br>
                <input type="submit" />
            </form>
        </div>
    )
};

export default Login;