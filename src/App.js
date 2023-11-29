import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/registerForm';
import LoginForm from './components/LoginForm';
import Main from './pages/main';

function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);

  return (
    <div>
       <BrowserRouter>
          <Routes>
              <Route exact path = "/main" element = {<Main 
                  email = {email} setEmail={setEmail}
                  loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}
                  registered = {registered} setRegistered = {setRegistered}
              />} />
              <Route exact path = "/" element = {<LoginForm 
                  email = {email} setEmail={setEmail}
                  loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}
                  registered = {registered} setRegistered = {setRegistered}
              />} />
              <Route exact path = "/login" element = {<LoginForm 
                  email = {email} setEmail={setEmail}
                  loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}
                  registered = {registered} setRegistered = {setRegistered}
              />} />
              <Route exact path = "/register" element = {<RegisterForm 
                  email = {email} setEmail={setEmail}
                  loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}
                  registered = {registered} setRegistered = {setRegistered}
              />} />
          </Routes>
       </BrowserRouter> 
    </div>
  );
}

export default App;
