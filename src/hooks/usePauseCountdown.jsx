import { useContext, useEffect, useState } from 'react';
import { CyclesContext } from '../context/CyclesContext';
import { FinishContext } from '../context/FinishContext';
import notificationOptions from '../utils/notificationOptions';

export default function usePauseCountdown() {
  const [pauseDone, setPauseDone] = useState(false);

  const { setFinish } = useContext(FinishContext);
  const { cycle, setCycle } = useContext(CyclesContext);

  // const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(300);
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(3);

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;

  useEffect(() => {
    if (totalTimeInSeconds === 0) {
      setPauseDone(true);
      new Notification('Agora você pode iniciar um novo ciclo!', notificationOptions);
      return;
    }

    const interval = setInterval(() => setTotalTimeInSeconds(totalTimeInSeconds - 1), 1000);

    if (cycle === 4) {
      setCycle(0);
      // setTotalTimeInSeconds(900);
      setTotalTimeInSeconds(5);
    }

    return () => clearInterval(interval);
  }, [totalTimeInSeconds, cycle, setCycle, minutes, seconds, setPauseDone]);

  function cycleDone() {
    setFinish(false);
    setCycle(cycle + 1);
  }

  return [minutes, seconds, pauseDone, cycleDone];
}