import React, { useEffect, useState } from 'react';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Sidebar from './components/Sidebar';
import heartIcon from './images/insta_heart.png';
import commentIcon from './images/insta_comment.png';
import shareIcon from './images/insta_share.png';
import saveIcon from './images/insta_save.png';
import friendsbanner from './images/friendsbar.png';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [userList, setUserList] = useState([]);
  const [photos, setPhotos] = useState([]);

  async function fetchImages() {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }  

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      {!loggedIn && <div className="forms-container">
          {!loggedIn && <Register
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}>  
            setLoggedIn={setLoggedIn}
          </Register>}
          {!loggedIn && <Login
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}
            setLoggedIn={setLoggedIn}>  
          </Login>}
          </div>
}
      {loggedIn && (      
        <div className="mainContent">
          <div className="columns-container">
            <div className="left-column">
            <img className="friendsbanner" src={friendsbanner} alt="Friends Row" />
              {photos.length > 0 ? (
                photos.map((item, index) => (
                  <div className="card" key={index}>
                    <div className="avatarBox">
                      <img className="avatar" src="https://picsum.photos/200/300" alt="Avatar" />
                      <span><p>{item.author} • 1 d</p></span>
                    </div>
                    <img className="uploadImage" src={item.download_url} alt="Uploaded Image" />
                    <div className="iconBox">
                      <div className="interactButtons">
                        <img className="icon" src={heartIcon} alt="Heart Icon" />
                        <img className="icon" src={commentIcon} alt="Comment Icon" />
                        <img className="icon" src={shareIcon} alt="Share Icon" />
                      </div>
                      <div className="saveButton">
                        <img className="icon" src={saveIcon} alt="Save Icon" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="right-column">
              <Logout
                setLoggedIn={setLoggedIn}
                setUserList={setUserList}
                setEmail={setEmail}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
