import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import './Profile.css'

const Profile = () => {
  return (
    <>
      <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src="assets/profile/profile3.jpg"
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src="assets/profile/profile2.jpg"
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </>
      <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </>
    </>
  );
};

export default Profile;
