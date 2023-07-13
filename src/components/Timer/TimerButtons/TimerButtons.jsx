import Button from 'components/Button/Button';
import { useContext } from 'react';
import { ModalInfoContext } from '../../../context/ModalInfoContext';
import { TimerActiveContext } from '../../../context/TimerActiveContext';
import style from './TimerButtons.module.scss';

function TimerButtons() {
  const { setTimerActive } = useContext(TimerActiveContext);
  const { setModalInfo } = useContext(ModalInfoContext);

  return (
    <div className={style.container__controls}>
      <Button
        type='button'
        onClick={() => setTimerActive(true)}
      >
        Começar
      </Button>

      <Button
        buttonBgColor='gray'
        onClick={() => setModalInfo(true)}
      >
        Info
      </Button>
    </div>
  );
}

export default TimerButtons;