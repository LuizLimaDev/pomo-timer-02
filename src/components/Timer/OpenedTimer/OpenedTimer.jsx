import buttonStop from 'assets/button-stop.png';
import imgTimerBaixo from 'assets/timer-bottom.png';
import imgTimerTopo from 'assets/timer-top.png';
import { useContext } from 'react';
import { TimerActiveContext } from '../../../context/TimerActiveContext';
import usePomoCountDown from '../../../hooks/usePomoCountdown';
import TimerDisplay from '../TimerDisplay/TimerDisplay';
import style from './OpenedTimer.module.scss';

function OpenedTimer() {
  const { setTimerActive } = useContext(TimerActiveContext);
  const [minutes, seconds] = usePomoCountDown(3);

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