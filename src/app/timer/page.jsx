"use client";

const centerText = "text-center";
const textStyle = "text-4xl font-bold mb-2";
const timeStyle = "text-2xl font-medium";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React, { useState, useEffect } from "react";
import {
  format,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  add,
} from "date-fns";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const countdownDate = add(new Date(), { weeks: 1 });

    const interval = setInterval(() => {
      const now = new Date();
      const distance = countdownDate - now;

      const days = differenceInDays(countdownDate, now);
      const hours = differenceInHours(countdownDate, now) % 24;
      const minutes = differenceInMinutes(countdownDate, now) % 60;
      const seconds = differenceInSeconds(countdownDate, now) % 60;

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("Countdown expired");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <Navbar/>
    <div className={centerText}>
      <h2 className={textStyle}>Get Your Coding Skills Up 😎</h2>
      <div className={timeStyle}>{timeLeft}</div>
    </div>
    <Footer/>
    </>
  );
};

export default Countdown;
