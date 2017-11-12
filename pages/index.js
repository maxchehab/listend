import React from "react";
import MusicPlayer from "../src/components/MusicPlayer";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <MusicPlayer />
        <MusicPlayer />
        <MusicPlayer />
        <MusicPlayer />
        <MusicPlayer />
      </div>
    );
  }
}
