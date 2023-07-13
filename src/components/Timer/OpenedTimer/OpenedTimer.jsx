import buttonStop from 'assets/button-stop.png';
import imgTimerBaixo from 'assets/timer-bottom.png';
import imgTimerTopo from 'assets/timer-top.png';
import { useContext, useEffect, useState } from 'react';
import { CyclesContext } from '../../../context/CyclesContext';
import { FinishContext } from '../../../context/FinishContext';
import { TimerActiveContext } from '../../../context/TimerActiveContext';
import notificationOptions from '../../../utils/notificationOptions';
import TimerDisplay from '../TimerDisplay/TimerDisplay';
import style from './OpenedTimer.module.scss';

function OpenedTimer() {
  // const { setTimerActive } = useContext(TimerActiveContext);
  // const [minutes, seconds] = usePomoCountDown(3);

  const { setTimerActive } = useContext(TimerActiveContext);
  const { setFinish } = useContext(FinishContext);
  const { cycle } = useContext(CyclesContext);

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(3);

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

    const interval = setInterval(() =>
      setTotalTimeInSeconds(c => c - 1), 1000
    );

    return () => clearInterval(interval);
  }, [totalTimeInSeconds, setTimerActive, setFinish, cycle]);

  return (
    <section className={style.timer__container}>
      <img
        className={style.timer}
        src={imgTimerTopo}
        alt="imagem da parte de cima do cronometro em formato de tomate"
      />

      <TimerDisplay minutes={minutes} seconds={seconds} />

      <img
        className={style.timer}
        src={imgTimerBaixo}
        alt="imagem da parte de baixo do cronometro em formato de tomate"
      />

      <div>
        <img
          src={buttonStop}
          alt="botão parar"
          onClick={() => setTimerActive(false)}
        />
        <p>Parar</p>
      </div>
    </section>
  );
}

export default OpenedTimer;