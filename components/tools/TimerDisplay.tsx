import React from "react";
import moment from "moment";

export const TimerDisplay = (time: string) => {
  const timeLeft = moment(time, "YYYY-MM-DD HH:mm Z").fromNow().split(" ");
  let timeDisplay = "Finished!";

  if (timeLeft[2].includes("day")) {
    timeDisplay = `${timeLeft[1]}d`;
  } else {
    if (timeLeft[1] === "an") {
      timeDisplay = `1h`;
    } else {
      timeDisplay = `${timeLeft[1]}h`;
    }
  }

  return timeDisplay;
};
