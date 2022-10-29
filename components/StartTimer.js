import { useEffect } from "react";
import "./StartTimer.css";

function StartTimer({ values, setValues }) {
  console.log(values.now);
  useEffect(() => {
    setInterval(() => {
      //   setState((prev) => prev - 1);
      setValues((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0 && prev.hours === 0) {
          return {
            ...prev,
            now: 0,
          };
        }
        if (prev.minutes === 0 && prev.seconds === 0) {
          return {
            ...prev,
            now:
              ((prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1) /
                prev.original) *
              100,
            hours: prev.hours - 1 < 0 ? 0 : prev.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        }
        if (prev.seconds === 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59,
            now:
              ((prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1) /
                prev.original) *
              100,
          };
        }
        return {
          ...prev,
          seconds: prev.seconds - 1,
          now:
            ((prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1) /
              prev.original) *
            100,
        };
      });
    }, 1000);
    // setInt(interval);
  }, [setValues]);
  return (
    <div>
      <div>Time Remaining:</div>
      <div style={{ display: "inline-block" }}>{values.hours} :</div>
      <div style={{ display: "inline-block" }}>{values.minutes} :</div>
      <div style={{ display: "inline-block" }}>{values.seconds}</div>
      <div
        className="pie"
        style={{
          backgroundImage: `conic-gradient(#eca1a6 ${values.now}%, #d6cbd3 0)`,
        }}
      ></div>
    </div>
  );
}

export default StartTimer;

// 60 mins -> 100%
