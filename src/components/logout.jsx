import React from 'react';
import '../App.css';
import profileIcon from '../images/profile.png';

function Logout(props) {
    function logoutfunc(setLoggedIn, setUserList, setEmail, setRegistered) {
        try {
            document.cookie = "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";  
            setLoggedIn(false);
            setRegistered(false);
            setUserList([]);
            setEmail("");
            console.log("logged out");   
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
              <img className="profileIcon" src={profileIcon} alt="profile icon" />
            </div>
            <div className="userInfo">
              <span><h1>Giantrobot99</h1></span>
              <span><p>Suggested for you</p></span>
            </div>
            <div className="followButtonContainer">
              <button className="logoutButton">Follow</button>
            </div>
        </div>


        <div className="logoutRow">
            <div className="profileIconContainer">
              <img className="profileIcon" src={profileIcon} alt="profile icon" />
            </div>
            <div className="userInfo">
              <span><h1>bananaman2023</h1></span>
              <span><p>Suggested for you</p></span>
            </div>
            <div className="followButtonContainer">
              <button className="logoutButton">Follow</button>
            </div>
        </div>

        <div className="logoutRow">
            <div className="profileIconContainer">
              <img className="profileIcon" src={profileIcon} alt="profile icon" />
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
              <img className="profileIcon" src={profileIcon} alt="profile icon" />
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
              <img className="profileIcon" src={profileIcon} alt="profile icon" />
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

  