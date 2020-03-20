import React from "react";
import "./Timer.css";

export class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      timer: null
    };
  }
  render() {
    const formattedTime = this.getFormattedTime(this.state.seconds);
    const startButtonText = this.state.seconds > 0 ? "Restart" : "Start";
    return (
      <div className="timer">
        <div className="timer-value-container">
          <span>Timer:&nbsp;</span>
          <span className="timer-value">
            <b>{formattedTime}</b>
          </span>
        </div>
        <span className="timer-controls">
          <button onClick={this.startTimer}>{startButtonText}</button>
          <button onClick={this.resetTimer}>Reset</button>
        </span>
      </div>
    );
  }

  startTimer = () => {
    this.resetTimer();
    const timer = setInterval(this.updateTime, 1000);
    this.setState({
      timer
    });
  };

  updateTime = () => {
    this.setState({
      seconds: this.state.seconds + 1
    });
  };

  resetTimer = () => {
    clearInterval(this.state.timer);
    this.setState({
      seconds: 0
    });
  };

  getFormattedTime = time => {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  };
}
