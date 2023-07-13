import Button from 'components/Button/Button';
// import usePauseCountdown from '../../../hooks/usePauseCountdown';
import TimerDisplay from '../../Timer/TimerDisplay/TimerDisplay';
import style from './ModalFinish.module.scss';
import { useContext, useEffect, useState } from 'react';
import { FinishContext } from '../../../context/FinishContext';
import { CyclesContext } from '../../../context/CyclesContext';
import notificationOptions from 'utils/notificationOptions';

function ModalFinish() {
  // const [minutes, seconds, pauseDone, cycleDone] = usePauseCountdown();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [pauseDone, setPauseDone] = useState(false);

  const { setFinish } = useContext(FinishContext);
  const { cycle, setCycle } = useContext(CyclesContext);

  const timer = setTimeout(() => {
    if (minutes >= 0 && seconds > 0) {
      setSeconds(seconds - 1);
    }

    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
  }, 1000);

  if (minutes === 0 && seconds === 0) {
    clearTimeout(timer);
  }

  useEffect(() => {
    if (cycle === 4) {
      setCycle(1);
      setMinutes(14);
      return;
    }

    if (minutes === 0 && seconds === 0) {
      setPauseDone(true);
      new Notification('Agora você pode iniciar um novo ciclo!', notificationOptions);
    }
  }, [cycle, setCycle, minutes, seconds]);

  function cycleDone() {
    setFinish(false);
    setCycle(cycle + 1);
  }

  return (
    <div className={style.modal__shade} >
      <div className={style.modal__mensage}>
        <h3 className={style.cycleDone}>Ciclo de Pomodoro finalizado!</h3>

        <p>Antes de iniciar uma nova tarefa, é recomendado uma <strong>pausa longa</strong> de 15 minutos!</p>

        <TimerDisplay minutes={minutes} seconds={seconds} />

        <Button
          buttonBgColor={!pauseDone ? 'gray' : ''}
          disabled={!pauseDone}
          onClick={() => cycleDone()}
        >
          Fechar!
        </Button>
      </div>
    </div >
  );
}

export default ModalFinish;