import React from "react";
import MusicPlayer from "../src/components/MusicPlayer";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <style global jsx>
          {`
            body {
              background-color: yellow;
            }
          `}
        </style>
        <MusicPlayer
          artwork={
            "https://i.scdn.co/image/569ab8432204ce5b410e1cb5382a8260db4d38e5"
          }
          title={"Big Jet Plane"}
          artist={"Alok"}
          length={"5:23"}
        />
        <MusicPlayer
          title={"Humble"}
          artist={"Kendrik Lamar"}
          artwork={
            "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Humble_kendrick_lamar.jpg/220px-Humble_kendrick_lamar.jpg"
          }
        />
        <MusicPlayer
          artwork={
            "https://i.scdn.co/image/569ab8432204ce5b410e1cb5382a8260db4d38e5"
          }
          title={"Big Jet Plane"}
          artist={"Alok"}
        />
        <MusicPlayer
          artwork={
            "https://i.scdn.co/image/569ab8432204ce5b410e1cb5382a8260db4d38e5"
          }
          title={"Big Jet Plane"}
          artist={"Alok"}
        />
        <MusicPlayer
          artwork={
            "https://i.scdn.co/image/569ab8432204ce5b410e1cb5382a8260db4d38e5"
          }
          title={"Big Jet Plane"}
          artist={"Alok"}
        />
      </div>
    );
  }
}
