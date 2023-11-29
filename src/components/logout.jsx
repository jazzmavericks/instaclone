import React from 'react';
import '../pages/main.css';
import {useNavigate} from 'react-router-dom';
import profileIcon from '../images/profile.png';
import profileIcon1 from '../images/profile1.png';
import profileIcon2 from '../images/profile2.png';
import profileIcon3 from '../images/profile3.png';
import profileIcon4 from '../images/profile4.png';
import profileIcon5 from '../images/profile5.png';

function Logout(props) {
  const navigate = useNavigate()
    function logoutfunc(setLoggedIn, setUserList, setEmail, setRegistered) {
        try {
            document.cookie = "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";  
            setLoggedIn(false);
            setRegistered(false);
            setUserList([]);
            setEmail("");
            console.log("logged out");  
            navigate ("/login");  
        } catch (error) {
            console.log(error);
        }
    }
  function handleLogout(event) {
    logoutfunc(props.setLoggedIn, props.setUserList, props.setEmail, props.setRegistered)
  };

  return (
    <div className="rightColumn">

        <div className="logoutRow">
            <div className="profileIconContainer">
              <img className="profileIcon" src={profileIcon} alt="profile icon" />
            </div>
            <div className="userInfo">
              <span><h1>My Profile</h1></span>
              <span><p>myprofileusername</p></span>
            </div>
            <div className="followButtonContainer">
              <button className="logoutButton" onClick={handleLogout}>Logout</button>
            </div>
        </div>

        <div className="suggestedHeader">
            <div>
                <p>Suggested for you</p>
            </div>
            <div>
                <h1>See All</h1>
            </div>
        </div>

        <div className="logoutRow">
            <div className="profileIconContainer">
              <img className="profileIcon1" src={profileIcon1} alt="profile icon" />
            </div>
            <div className="userInfo">
              <span><h1>shrubchester</h1></span>
              <span><p>Suggested for you</p></span>
            </div>
            <div className="followButtonContainer">
              <button className="logoutButton">Follow</button>
            </div>
        </div>


        <div className="logoutRow">
            <div className="profileIconContainer">
              <img className="profileIcon2" src={profileIcon2} alt="profile icon" />
            </div>
            <div className="userInfo">
              <span><h1>welovegoodtimes</h1></span>
              <span><p>Suggested for you</p></span>
            </div>
            <div className="followButtonContainer">
              <button className="logoutButton">Follow</button>
            </div>
        </div>

        <div className="logoutRow">
            <div className="profileIconContainer">
              <img className="profileIcon3" src={profileIcon3} alt="profile icon" />
            </div>
            <div className="userInfo">
              <span><h1>Santa.claws25th</h1></span>
              <span><p>Suggested for you</p></span>
            </div>
            <div className="followButtonContainer">
              <button className="logoutButton">Follow</button>
            </div>
        </div>

        <div className="logoutRow">
            <div className="profileIconContainer">
              <img className="profileIcon4" src={profileIcon4} alt="profile icon" />
            </div>
            <div className="userInfo">
              <span><h1>ObamaLlama</h1></span>
              <span><p>Suggested for you</p></span>
            </div>
            <div className="followButtonContainer">
              <button className="logoutButton">Follow</button>
            </div>
        </div>

        <div className="logoutRow">
            <div className="profileIconContainer">
              <img className="profileIcon5" src={profileIcon5} alt="profile icon" />
            </div>
            <div className="userInfo">
              <span><h1>VladPutin99</h1></span>
              <span><p>Suggested for you</p></span>
            </div>
            <div className="followButtonContainer">
              <button className="logoutButton">Follow</button>
            </div>
        </div>
    </div>

  );
};

export default Logout;

  