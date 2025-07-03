import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-07-03T23:59:59'); // Set your desired end time here
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId); // Clean up
  }, []);

  return (
    <div className="top-banner" aria-live="polite">
      <span className="flash-icon" aria-hidden="true">⚡</span>
      <span><strong>SPECIAL LAUNCH OFFER ... </strong></span>
      <a href="#"><strong style={{ color: 'white' }}>Ends In:</strong></a>
      <span className="timer">
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
      </span>
    </div>
  );
}

export default Banner;
