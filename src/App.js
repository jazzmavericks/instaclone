import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Main from './pages/main';

function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);

  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
              <Route exact path = "/main" element = {<Main 
                  email = {email} setEmail={setEmail}
                  loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}
                  registered = {registered} setRegistered = {setRegistered}
              />} />
              <Route exact path = "/" element = {<Login 
                  email = {email} setEmail={setEmail}
                  loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}
                  registered = {registered} setRegistered = {setRegistered}
              />} />
              <Route exact path = "/login" element = {<Login 
                  email = {email} setEmail={setEmail}
                  loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}
                  registered = {registered} setRegistered = {setRegistered}
              />} />
              <Route exact path = "/register" element = {<Register 
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
