"use client";

import React, { useState, useEffect } from "react";
import Button from "./button";

import { Timer, TimerOff, TimerReset } from "lucide-react";

const getFormattedTime = (time: number) => {
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

enum TimerState {
  On,
  Off,
}

export default function TimerControl() {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  const startButtonText = active ? "Stop" : "Start";

  const toggle = () => {
    console.log("Toggle timer", active);
    setActive(!active);
  };

  const reset = () => {
    setActive(false);
    setSeconds(0);
  };

  useEffect(() => {
    let interval: any = null;
    // console.log("inside effect");
    if (active) {
      // console.log("set interval");
      interval = setInterval(() => {
        // console.log("Update seconds");
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return (...args) => {
      console.log("args: ", args);
      if (interval != null) {
        // console.log("Clearing interval");
        clearInterval(interval);
      }
    };
  }, [active]);

  const formattedTime = getFormattedTime(seconds);

  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <span>Timer:&nbsp;</span>
        <span className="">
          <b>{formattedTime}</b>
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <Button onClick={toggle}>
          {active ? <TimerOff /> : <Timer />} <span>{startButtonText}</span>
        </Button>
        <Button onClick={reset}>
          <TimerReset /> <span>Reset</span>
        </Button>
      </div>
    </div>
  );
}
