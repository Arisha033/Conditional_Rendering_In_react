import { useState } from 'react'
import { Password } from './Components/Password'
import { Cart } from './Components/Cart'


function App() {


  return (
    <>
   <Password
   isValid={true}
    />

    <Cart />

    </>
  )
}

export default App
