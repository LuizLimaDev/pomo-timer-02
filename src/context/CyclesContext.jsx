
import { createContext, useState } from 'react';

export const CyclesContext = createContext();

export const CyclesProvider = ({ children }) => {
  const [cycle, setCycle] = useState(1);

  return (
    <CyclesContext.Provider value={{ cycle, setCycle }}>
      {children}
    </CyclesContext.Provider>
  );
};