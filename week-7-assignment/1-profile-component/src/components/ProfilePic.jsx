export const ProfilePic = ({ imagePath }) => {
  return (
    <div className="profile-pic">
      <img className="image" src={imagePath} alt="" />{" "}
    </div>
  );
};
