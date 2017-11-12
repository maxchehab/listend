import Radium from "radium";
import React from "react";
import Progress from "react-progressbar";
import ReactFitText from "react-fittext";

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
        <div
          onClick={this.toggle}
          style={[
            styles.playButton,
            {
              backgroundImage: this.state.playing
                ? "url(/static/player/play-button.png)"
                : "url(/static/player/pause-button.png)"
            }
          ]}
        />
        <div style={styles.playerControls}>
          <p
            style={{
              fontSize: this.state.height * 0.3,
              marginTop: this.state.height * 0.05,
              marginBottom: this.state.height * 0.05,
              marginLeft: 0,
              marginRight: 0
            }}
          >
            Oslo <small>by</small> Holy Esque
          </p>

          <span>
            <div style={{ textAlign: "center" }}>
              <small
                style={{
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
                  color={"blue"}
                  completed={this.state.progress}
                />
              </div>
              <small
                style={{
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
        <img
          style={[styles.albumImage, { height: this.state.height }]}
          src="https://artwork-cdn.7static.com/static/img/sleeveart/00/051/614/0005161476_350.jpg"
        />
      </div>
    );
  }
}

const styles = {
  playButton: {
    backgroundSize: "cover",
    width: "75px",
    height: "75px",
    margin: "2rem 0 2rem 2rem",
    opacity: 0.85,
    cursor: "pointer",
    ":hover": {
      opacity: 1
    }
  },
  audioPlayer: {
    background: "white",
    border: "1px solid blue",
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
    borderRadius: "2px",
    display: "inline-block",
    border: "1px solid #dfdfdf",
    appearance: "none"
  }
};

MusicPlayer.defaultProps = {
  playing: false,
  length: "0:00",
  progress: 0,
  height: 150
};
