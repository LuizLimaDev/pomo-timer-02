import Button from 'components/Button/Button';
import style from './ModalInfo.module.scss';
import pomoInfo from 'assets/pomo-info.png';
import { useContext } from 'react';
import { ModalInfoContext } from '../../../context/ModalInfoContext';

function ModalInfo() {
  const { setModalInfo } = useContext(ModalInfoContext);

  return (
    <div className={style.modal__shade} >
      <div className={style.modal__mensage}>
        <h3 className={style.modal__title}>Técnica de Pomodoro!</h3>

        <p>Desenvolvida no final dos anos 80 pelo italiano Francesco Cirillo, que procurava uma maneira de aumentar sua produtividade nos estudos. Para isso, ele utilizou um timer de cozinha que tinha o formato de um tomate (Pomodoro) que marcava 25 minutos.</p>

        <img
          className={style.modal__image}
          src={pomoInfo}
          alt="Imagem de informação dos ciclos de Pomodoro"
        />

        <p>Ele se mantia focado <strong>100% do tempo</strong> na tarefa. Ao perceber os resultados satisfatórios, divulgou sua técnica em 1992.</p>

        <div>
          <p className={style.modal__info}><strong>Ciclo:</strong> 25min focado, seguido de 5min de intervalo.</p>
          <p className={style.modal__info}><strong>Pausa longa:</strong> Após quatro Ciclos, intervalo de 15 a 30 minutos.</p>
        </div>

        <Button
          size='large'
          onClick={() => setModalInfo(false)}
        >
          Fechar!
        </Button>
      </div>
    </div >
  );
}

export default ModalInfo;