import React, { createContext, useState } from 'react'

export const OpenMenuContext = createContext();

const MenuContextProvider = ({ children }) => {

  // State Variables
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <OpenMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, modalIsOpen, setModalIsOpen }}>
        {children}
      </OpenMenuContext.Provider>
    </>
  )
}

export default MenuContextProvider
