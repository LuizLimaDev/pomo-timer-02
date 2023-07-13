import { useContext, useEffect, useMemo, useState } from 'react';
import { CyclesContext } from '../context/CyclesContext';
import { FinishContext } from '../context/FinishContext';
import { TimerActiveContext } from '../context/TimerActiveContext';
import notificationOptions from '../utils/notificationOptions';

export default function usePauseCountdown(time) {
  const { setTimerActive } = useContext(TimerActiveContext);
  const { setFinish } = useContext(FinishContext);
  const { cycle } = useContext(CyclesContext);

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(time);

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;

  useEffect(() => {
    if (totalTimeInSeconds === 0) {
      setTimerActive(false);
      setFinish(true);

      if (cycle === 4) {
        new Notification(
          `Ciclo ${Number(cycle)} de Pomodoro finalizado! Hora da pausa longa!`, notificationOptions
        );
        return;
      }

      new Notification(`Ciclo ${Number(cycle)} de Pomodoro finalizado, pause por 5 minutos!`, notificationOptions);
      return;
    }

    const countdownMemo = useMemo((totalTimeInSeconds) => {
      const interval = setInterval(() =>
        setTotalTimeInSeconds(totalTimeInSeconds - 1), 1000
      );

      return interval;
    });

    return () => clearInterval(countdownMemo);
  }, [totalTimeInSeconds, setTimerActive, setFinish, cycle]);

  return [minutes, seconds];
}