export default function regressiveCounting(minutes, seconds, setMinutes, setSeconds) {
  const timer = () => {
    if (minutes >= 0 && seconds > 0) {
      setSeconds(seconds - 1);
    }

    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
  };

  setInterval(timer, 1000);

  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
  }

}
