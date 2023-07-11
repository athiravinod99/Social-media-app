import "./Rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/post/post2.jpg" alt="" />
          <span className="birthdayText">sddsfdn</span>
        </div>
        <img className="rightbarAd" src="assets/post/post4.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/profile/profile4.jpg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Anu</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
