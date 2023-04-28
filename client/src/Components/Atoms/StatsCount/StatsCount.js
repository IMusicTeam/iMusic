import React, { useState, useEffect } from "react";

const StatusesCard = ({ maxCount, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < maxCount) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [count, maxCount]);

  return <div className={`font-bolder text-[26px] ${className}`}> {count}</div>;
};

export default StatusesCard;
