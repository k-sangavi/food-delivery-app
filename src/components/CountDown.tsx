// WITH A LIBRARY
"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2025-05-20");

const CountDown = () => {
  return <Countdown className="font-bold text-5xl text-yellow-300" date={new Date("2025-05-20")} />;
};

export default CountDown;
