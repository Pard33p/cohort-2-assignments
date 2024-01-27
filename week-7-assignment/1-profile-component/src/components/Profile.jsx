import { Card } from "./Card";
import { Cover } from "./Cover";
import { ProfilePic } from "./ProfilePic";
import { CountDisplay } from "./CountDisplay";

//These paths are relative public folder
const coverPath = "/cover.jpg";
const profilePicPath = "/profile.jpg";

export const Profile = (props) => {
  return (
    <Card>
      <Cover imagePath={coverPath} />
      <ProfilePic imagePath={profilePicPath} />
      <div className="card-content">
        <br />
        <p style={{ fontSize: "20px" }}>
          <strong>{props.name}</strong> {props.age}
        </p>
        <p style={{ fontSize: "18px" }}>{props.location}</p>
        <hr />
        <div className="container">
          <CountDisplay count={props.followersCount} countName={"Followers"} />
          <CountDisplay count={props.likesCount} countName={"Likes"} />
          <CountDisplay count={props.photosCount} countName={"Photos"} />
        </div>
      </div>
    </Card>
  );
};
