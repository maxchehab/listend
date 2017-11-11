import React from "react";

export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, length: "5:26", progress: 0.5 };
    this.togglePause = this._togglePause.bind(this);
  }

  _togglePause() {
    const pause =
      "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";
    const play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";
    let animation = document.getElementById("animation");

    console.log(animation);

    this.setState({ playing: !this.state.playing });
    animation.setAttribute("from", this.state.playing ? pause : play);
    animation.setAttribute("to", this.state.playing ? play : pause);
    animation.beginElement();
  }

  render() {
    let svgTag = `<svg width="100%" height="100%" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
         <path id="ytp-12" d="M 11 10 L 17 10 L 17 26 L 11 26 M 20 10 L 26 10 L 26 26 L 20 26">
            <animate id="animation" begin="indefinite" attributeType="XML" attributeName="d" fill="freeze" from="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" to="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28" dur="0.1s" keySplines=".4 0 1 1"
            repeatCount="1"></animate>
         </path>
      </defs>
      <use xlink:href="#ytp-12" class="ytp-svg-shadow"></use>
      <use xlink:href="#ytp-12" class="ytp-svg-fill"></use>
   </svg>`;

    return (
      <div className="audio-player">
        <style global jsx>{`
          .ytp-play-button {
            fill: #1ed760;
            opacity: 0.85;
            outline: none;
            border: 0px solid;
            background: transparent;
            width: 75px;
            height: 75px;
            margin: 2rem 0 2rem 2rem;
          }

          .ytp-play-button:hover {
            cursor: pointer;
            opacity: 1;
          }

          .audio-player {
            background: white;
            border: 1px solid #70eb9c;
            text-align: center;
            display: flex;
            flex-flow: row;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          }
          .audio-player .album-image {
            height: 142px;
          }
          .audio-player .player-controls {
            align-items: center;
            justify-content: center;
            margin-top: 2.5rem;
            flex: 3;
          }
          .audio-player .player-controls progress {
            width: 90%;
          }
          .audio-player .player-controls progress[value] {
            -webkit-appearance: none;
            appearance: none;
            background-color: white;
            color: blue;
            height: 5px;
          }
          .audio-player .player-controls progress[value]::-webkit-progress-bar {
            background-color: white;
            border-radius: 2px;
            border: 1px solid #dfdfdf;
            color: blue;
          }
          .audio-player .player-controls progress::-webkit-progress-value {
            background-color: #1ed760;
          }
          .audio-player .player-controls p {
            font-size: 1.6rem;
            margin: 0;
          }
        `}</style>
        <button
          onClick={this.togglePause}
          dangerouslySetInnerHTML={{ __html: svgTag }}
          className="ytp-play-button ytp-button"
          aria-live="assertive"
          tabIndex="32"
          aria-label="Pause"
        />

        <div className={"player-controls scrubber"}>
          <p>
            Oslo <small>by</small> Holy Esque
          </p>
          <span id="seekObjContainer">
            <progress id="seekObj" value={this.state.progress} max="1" />
          </span>
          <br />
          <small
            style={{ float: "left", position: "relative", left: "15px" }}
            className="start-time"
          >
            2:46
          </small>
          <small
            style={{ float: "right", position: "relative", right: "20px" }}
            className="end-time"
          >
            {this.state.length}
          </small>
        </div>
        <img
          className="album-image"
          src="https://artwork-cdn.7static.com/static/img/sleeveart/00/051/614/0005161476_350.jpg"
        />
      </div>
    );
  }
}
