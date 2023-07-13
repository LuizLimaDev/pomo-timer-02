import style from './Button.module.scss';
import classNames from 'classnames';

function Button({ children, size, buttonBgColor, onClick, disabled }) {
  return (
    <>
      <button
        className={classNames({
          [style.button]: true,
          [style.large]: size === 'large',
          [style.gray]: buttonBgColor === 'gray'
        })}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button >
    </>
  );
}

export default Button;