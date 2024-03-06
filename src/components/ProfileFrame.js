import "./ProfileFrame.css";

const ProfileFrame = () => {
  return (
    <header className="profile-frame2">
      <div className="profile-frame-child" />
      <div className="appointments-frame1">
        <img
          className="skinclublogo-logotype-white-1-icon2"
          loading="lazy"
          alt=""
          src="/skinclublogo-logotype-white-1@2x.png"
        />
      </div>
      <div className="messages-frame">
        <div className="support-frame">
          <h3 className="sunday-20-august2">Sunday, 20 August</h3>
        </div>
        <div className="pm2">1:50 PM</div>
        <div className="videos-library-frame">
          <div className="videos-library-frame-child" />
          <img
            className="health-skin-assessment-frame"
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default ProfileFrame;
