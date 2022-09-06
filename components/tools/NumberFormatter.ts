import React from "react";

export const NumberFormatter = (num: number) => {
  let result = "0";

  if (num >= 1000000) {
    const numToString = (num / 1000000).toFixed(1).toString();
    result = `${numToString}m`;
  } else if (num >= 1000) {
    const numToString = (num / 1000).toFixed(1).toString();
    result = `${numToString}k`;
  } else {
    result = num.toString();
  }

  return result as string;
};
