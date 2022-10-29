import { useRef } from "react";

function SetTimer(props) {
  //   let hours, minutes, seconds;
  //   hours = minutes = seconds = useRef();
  const hours = useRef();
  const minutes = useRef();
  const seconds = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    props.onChangeValues(
      +hours.current.value,
      +minutes.current.value,
      +seconds.current.value
    );
  };
  return (
    <div>
      Set Timer
      <form onSubmit={submitHandler}>
        <input type="number" min="0" placeholder="Hours" ref={hours} />
        <input
          type="number"
          min="0"
          max="59"
          placeholder="Minutes"
          ref={minutes}
        />
        <input
          type="number"
          min="0"
          max="59"
          placeholder="Seconds"
          ref={seconds}
        />
        <button type="submit">START TIMER</button>
      </form>
    </div>
  );
}

export default SetTimer;
