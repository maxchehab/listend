import React from "react";
import MusicPlayer from "../src/components/MusicPlayer";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <MusicPlayer
          artwork={
            "https://i.scdn.co/image/569ab8432204ce5b410e1cb5382a8260db4d38e5"
          }
          title={"Big Jet Plane"}
          artist={"Alok"}
          length={"5:23"}
          height={80}
          progress={40}
        />
      </div>
    );
  }
}
