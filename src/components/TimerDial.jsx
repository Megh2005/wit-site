"use client";
import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeComponents = Object.keys(timeLeft).map((interval) => (
    <div key={interval} className="flex flex-col items-center">
      <div className="bg-gray-800 text-white text-4xl font-bold rounded-full h-24 w-24 flex items-center justify-center">
        {timeLeft[interval].toString().padStart(2, "0")}
      </div>
      <span className="text-gray-400 text-xl mt-2">{interval}</span>
    </div>
  ));

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-8">
        Countdown Timer
      </h1>
      <div className="flex space-x-8">{timeComponents}</div>
    </div>
  );
};

export default CountdownTimer;
