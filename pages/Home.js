import { useState } from "react";
import SetTimer from "../components/SetTimer";
import StartTimer from "../components/StartTimer";

function Home() {
  const [values, setValues] = useState({
    hours: 0,
    minutes: 9,
    seconds: 5,
    original: 0,
    now: 100,
  });
  //   const [interval, setInt] = useState(null);
  const changeValues = (h, m, s) => {
    // clearInterval(interval);
    // console.log(h, m, s);
    setValues({
      hours: h,
      minutes: m,
      seconds: s,
      original: h * 3600 + m * 60 + s,
      now: 100,
    });
  };
  return (
    <div>
      <SetTimer onChangeValues={changeValues} />
      <StartTimer values={values} setValues={setValues} />
    </div>
  );
}

export default Home;
