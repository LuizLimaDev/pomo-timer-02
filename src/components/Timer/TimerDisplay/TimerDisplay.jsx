import style from './TimerDisplay.module.scss';

function TimerDisplay({ minutes, seconds }) {
  return (
    <div className={style.timer__display}>
      <h1 className={style.timer__time}>{minutes.toString().padStart(2, '0')}</h1>
      <h1>:</h1>
      <h1 className={style.timer__time}>{seconds.toString().padStart(2, '0')}</h1>
    </div>
  );
}

export default TimerDisplay;