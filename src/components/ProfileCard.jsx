export default function ProfileCard() {
    return (
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/100"
          alt="avatar"
          className="profile-avatar"
        />
        <h2 className="profile-name">Matti Meikäläinen</h2>
        <p className="profile-description">
          Full-stack developer, passionate about coding and coffee
        </p>
        <button className="profile-button">Contact Me</button>
      </div>
    );
  }