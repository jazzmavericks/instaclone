function Sidebar() {
  return (
    <div className="sidebar">
      <img className="logo" src={instaLogo} alt="Instagram Logo" />      
      <ul>
        <li><img className="menuIcon" src={homeIcon} alt="home icon" /> <span>Home</span></li>
        <li><img className="menuIcon" src={searchIcon} alt="search icon" /> Search</li>
        <li><img className="menuIcon" src={exploreIcon} alt="explore icon" /> Explore</li>
        <li><img className="menuIcon" src={reelsIcon} alt="reels icon" /> Reels</li>
        <li><img className="menuIcon" src={messagesIcon} alt="messages icon" /> Messages</li>
        <li><img className="menuIcon" src={notificationsIcon} alt="notifications icon" /> Notifications</li>
        <li><img className="menuIcon" src={createIcon} alt="create icon" /> Create</li>
        <li><img className="menuIcon" src={profileIcon} alt="profile icon" /> Profile</li>
        <li> </li>
        <li><img className="menuIcon" src={hamburgerIcon} alt="hamburger icon" /> More</li>
      </ul>
    </div>
  );
}

export default Sidebar;