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
    console.log("we changing");
    this.setState({
      playing: !this.state.playing
    });
  }

  render() {
    return (
      <div style={[styles.audioPlayer, { height: this.state.height }]}>
        <div onClick={this.toggle} style={[styles.playButton]} />
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
    width: 64,
    height: 64,
    left: 7,
    top: 7,
    backgroundColor: "transparent",
    backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI2MCAxNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yNTIgMEgxMjZDOTEuMyAwIDYxLjcgMTIuMyAzNyAzNyAxMi4zIDYxLjcgMCA5MS4zIDAgMTI2djEyNjBjMCAzNC43IDEyLjMgNjQuMyAzNyA4OSAyNC43IDI0LjcgNTQuMyAzNyA4OSAzN2gxMjZjMzQuNyAwIDY0LjMtMTIuMyA4OS0zNyAyNC43LTI0LjcgMzctNTQuMyAzNy04OVYxMjZjMC0zNC43LTEyLjMtNjQuMy0zNy04OS0yNC43LTI0LjctNTQuMy0zNy04OS0zN3ptODgyIDBoLTEyNmMtMzQuNyAwLTY0LjMgMTIuMy04OSAzNy0yNC43IDI0LjctMzcgNTQuMy0zNyA4OXYxMjYwYzAgMzQuNyAxMi4zIDY0LjMgMzcgODkgMjQuNyAyNC43IDU0LjMgMzcgODkgMzdoMTI2YzM0LjcgMCA2NC4zLTEyLjMgODktMzcgMjQuNy0yNC43IDM3LTU0LjMgMzctODlWMTI2YzAtMzQuNy0xMi4zLTY0LjMtMzctODktMjQuNy0yNC43LTU0LjMtMzctODktMzd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 24,
    backgroundPosition: "58% 50%",
    borderRadius: 500,
    border: "1px solid #a0a0a0",
    cursor: "pointer"
  },
  audioPlayer: {
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
