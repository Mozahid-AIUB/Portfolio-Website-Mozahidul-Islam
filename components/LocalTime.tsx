"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Asia/Dhaka",
});

export function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="tabular-nums">{time || "--:--:--"}</span>;
}
