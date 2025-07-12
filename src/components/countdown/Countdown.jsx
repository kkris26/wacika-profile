import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState([]);
  const target = new Date("2025-09-10");

  function updateCountdown() {
    const now = new Date();
    const diff = target - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    setCountdown([`${d} days`, `${h} hours`, `${m} mins`, `${s} sec`]);
  }
  useEffect(() => {
    const now = new Date();
    updateCountdown();
    const miliSecond = now.getMilliseconds();
    const timeOut = miliSecond;
    const out = setTimeout(() => {
      updateCountdown();
      const interval = setInterval(() => {
        updateCountdown();
      }, 1000);
      return () => clearInterval(interval);
    }, timeOut);

    return () => clearTimeout(out);
  }, []);
  return (
    <div>
      <ul className="text-white flex gap-3 md:text-xl">
        {countdown.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      ;
    </div>
  );
};

export default Countdown;
