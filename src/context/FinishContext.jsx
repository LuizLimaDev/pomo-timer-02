import { createContext, useState } from 'react';

export const FinishContext = createContext();

export const FinishProvider = ({ children }) => {
  const [finish, setFinish] = useState(false);

  return (
    <FinishContext.Provider value={{ finish, setFinish }}>
      {children}
    </FinishContext.Provider>
  );
};