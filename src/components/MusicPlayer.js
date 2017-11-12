import Radium from "radium";
import React from "react";
import Progress from "./Progress";

@Radium
export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: this.props.playing,
      length: this.props.length,
      progress: this.props.progress,
      height: this.props.height
    };
    this.toggle = this._toggle.bind(this);
  }

  _toggle() {
    this.setState({
      playing: !this.state.playing
    });
  }

  render() {
    return (
      <div style={[styles.audioPlayer, { height: this.state.height }]}>
        <div
          onClick={this.toggle}
          style={[
            styles.playButton,
            {
              backgroundImage: this.state.playing
                ? "url(/static/player/pause.svg)"
                : "url(/static/player/play.svg)"
            }
          ]}
        />
        <img
          style={[styles.albumImage, { height: this.state.height }]}
          src={this.props.artwork}
        />
        <div style={styles.playerControls}>
          <p
            style={{
              fontSize: this.state.height * 0.3,
              marginTop: this.state.height * 0.05,
              marginBottom: this.state.height * 0.05,
              marginLeft: 0,
              marginRight: 0,
              color: "white"
            }}
          >
            {this.props.title}
            <small> by </small> {this.props.artist}
          </p>

          <span>
            <div style={{ textAlign: "center" }}>
              <small
                style={{
                  color: "#a0a0a0",
                  float: "left",
                  bottom: -3,
                  position: "relative",
                  left: "15px"
                }}
              >
                2:46
              </small>
              <div style={styles.progress}>
                <Progress
                  height={5}
                  color={"#1ed760"}
                  completed={this.state.progress}
                />
              </div>
              <small
                style={{
                  color: "#a0a0a0",
                  float: "right",
                  bottom: -3,
                  position: "relative",
                  right: "20px"
                }}
              >
                {this.state.length}
              </small>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

const styles = {
  playButton: {
    position: "absolute",
    height: 64,
    left: 7,
    top: 7,
    backgroundColor: "transparent",
    width: "64px",
    transform: "scale(.6)",
    backgroundRepeat: "no-repeat",
    backgroundSize: 24,
    backgroundColor: "rgba(0,0,0,.7)",
    backgroundPosition: "55% 50%",
    borderRadius: 500,
    border: "1px solid #a0a0a0",
    cursor: "pointer",
    ":hover": {
      border: "1px solid #1ed760"
    }
  },
  audioPlayer: {
    position: "relative",
    margin: 15,
    background: "#282828",
    textAlign: "center",
    display:
      "-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex",
    flexFlow: "row",
    fontFamily: `"Helvetica Neue",Helvetica,Arial,sans-serif`
  },
  albumImage: {
    height: "142px"
  },
  playerControls: {
    alignItems: "center",
    justifyContent: "center",
    flex: 3
  },
  progress: {
    width: "90%",
    borderRadius: "3px",
    display: "inline-block",
    border: "1px solid #transparent",
    backgroundColor: "#404040"
  }
};

MusicPlayer.defaultProps = {
  playing: false,
  length: "0:00",
  progress: 0,
  height: 150
};
