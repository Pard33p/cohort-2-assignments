import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <Profile
        name={"Pardeep Singh"}
        age={25}
        location={"Gurugram"}
        followersCount={"80K"}
        likesCount={"803K"}
        photosCount={"1.4K"}
      />
    </>
  );
}

export default App;
