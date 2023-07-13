import 'normalize-css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CyclesProvider } from './context/CyclesContext';
import { FinishProvider } from './context/FinishContext';
import { ModalInfoProvider } from './context/ModalInfoContext';
import { TimerActiveProvider } from './context/TimerActiveContext';
import './index.css';
import App from './pages/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimerActiveProvider>
      <ModalInfoProvider>
        <FinishProvider>
          <CyclesProvider>
            <App />
          </CyclesProvider>
        </FinishProvider>
      </ModalInfoProvider>
    </TimerActiveProvider>
  </React.StrictMode>,
);
