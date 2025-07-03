import React, { useEffect, useState } from 'react';
import './Timer.css';

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const countdownDate = new Date("2025-06-30T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // initial call

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-box">
      <div className="countdown">
        <div className="time">
          <span>{timeLeft.days}</span>
          <div className="label">DAYS</div>
        </div>
        <div className="divider">:</div>
        <div className="time">
          <span>{timeLeft.hours}</span>
          <div className="label">HOURS</div>
        </div>
        <div className="divider">:</div>
        <div className="time">
          <span>{timeLeft.minutes}</span>
          <div className="label">MINUTES</div>
        </div>
        <div className="divider">:</div>
        <div className="time">
          <span>{timeLeft.seconds}</span>
          <div className="label">SECONDS</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
