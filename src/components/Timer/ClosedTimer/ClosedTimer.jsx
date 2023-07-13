import imgTimerBaixo from 'assets/timer-bottom.png';
import imgTimerTopo from 'assets/timer-top.png';
import style from './ClosedTimer.module.scss';

function ClosedTimer() {
  return (
    <div className={style.container__timer}>
      <img
        className={style.timer}
        src={imgTimerTopo}
        alt="imagem da parte de cima do cronometro em formato de tomate"
      />
      <img
        className={style.timer}
        src={imgTimerBaixo}
        alt="imagem da parte de baixo do cronometro em formato de tomate"
      />
    </div>
  );
}

export default ClosedTimer;