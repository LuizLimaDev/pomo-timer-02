import circleImg from 'assets/circle.svg';
import style from './RoundCounter.module.scss';

function RoundCounter({ cycle }) {
  return (
    <div className={style.roundcouter}>
      <img
        className={style.roundcouter__circle}
        src={circleImg}
        alt="Contador dos ciclos de Pomodoro"
      />
      <h3 className={style.roundcouter__number}>{cycle}</h3>
    </div>
  );
}

export default RoundCounter;