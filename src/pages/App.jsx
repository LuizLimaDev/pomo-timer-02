import ModalInfo from 'components/Modals/ModalInfo/ModalInfo';
import Timer from 'components/Timer/Timer';
import { useContext } from 'react';
import TimerButtons from '../components/Timer/TimerButtons/TimerButtons';
// import { FinishContext } from '../context/FinishContext';
import { ModalInfoContext } from '../context/ModalInfoContext';
import { TimerActiveContext } from '../context/TimerActiveContext';
import useNotification from '../hooks/useNotification';
import style from './App.module.scss';
// import ModalFinish from 'components/Modals/ModalFinish/ModalFinish';

function App() {
  const { timerActive } = useContext(TimerActiveContext);
  const { modalInfo } = useContext(ModalInfoContext);
  // const { finish } = useContext(FinishContext);

  const { notificationActive } = useNotification();

  return (
    <main>
      <h1 className={style.title}>Pomo Timer </h1>

      {!notificationActive &&
        <p className={style.notificationAlert}>Ative as notificações do navegador!</p>
      }

      {/* 
      *Update of version 2.0.0
      <RoundCounter cycle={cycle} /> 
      */}

      <Timer />

      {!timerActive && <TimerButtons />}
      {/* {finish && <ModalFinish />} */}
      {modalInfo && <ModalInfo />}
    </main>
  );
}

export default App;
