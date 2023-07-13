import { useContext } from 'react';
import ClosedTimer from './ClosedTimer/ClosedTimer';
import OpenedTimer from './OpenedTimer/OpenedTimer';
import { TimerActiveContext } from '../../context/TimerActiveContext';

function Timer() {
  const { timerActive } = useContext(TimerActiveContext);

  return (
    <section>
      {timerActive ? <OpenedTimer /> : <ClosedTimer />}
    </section>
  );
}

export default Timer;