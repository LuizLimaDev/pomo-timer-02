import { createContext, useState } from 'react';

export const ModalInfoContext = createContext();

export const ModalInfoProvider = ({ children }) => {
  const [modalInfo, setModalInfo] = useState(false);

  return (
    <ModalInfoContext.Provider value={{ modalInfo, setModalInfo }}>
      {children}
    </ModalInfoContext.Provider>
  );
};