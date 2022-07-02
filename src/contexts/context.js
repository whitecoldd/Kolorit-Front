import React, { createContext } from 'react'
import Cart from '../pages/Cart'

const cart  = createContext()

const context = ({children}) => {
  return( 
    <Cart.Provider>{children}</Cart.Provider>
  )
}

export default context