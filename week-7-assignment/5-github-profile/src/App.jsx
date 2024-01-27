import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Profile username={"Pard33p"} />
      <Profile username={"DrSehgal7"} />
      <Profile username={"InderjeetSingh777"} />
    </>
  );
}

function Profile({ username }) {
  const [githubInfo, setGithubInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`).then(async (response) => {
      const info = await response.json();
      setGithubInfo(info);
    });
  }, []);

  return (
    <Card>
      <ProfilePic imagePath={`${githubInfo.avatar_url}`} />
      <div className="card-content">
        <h2>{githubInfo.name}</h2>
        <h3>{githubInfo.login}</h3>
        <p>{githubInfo.bio}</p>
        <p>
          {githubInfo.followers} followers | {githubInfo.following} following
        </p>
        <p>{githubInfo.location}</p>
      </div>
    </Card>
  );
}

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const ProfilePic = ({ imagePath }) => {
  return (
    <div className="profile-pic">
      <img className="image" src={imagePath} alt="" />{" "}
    </div>
  );
};

export default App;
