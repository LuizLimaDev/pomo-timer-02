import { createContext, useState } from 'react';

export const TimerActiveContext = createContext();

export const TimerActiveProvider = ({ children }) => {
  const [timerActive, setTimerActive] = useState(false);

  return (
    <TimerActiveContext.Provider value={{ timerActive, setTimerActive }}>
      {children}
    </TimerActiveContext.Provider>
  );
};