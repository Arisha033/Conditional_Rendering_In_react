import React from 'react'
// Conditional rendering using if else statements

const ValidPassword = () => {
    return <h2>Valid Password</h2>
  }

  const InvalidPassword = () => {
    return <h2>Invalid Password</h2>
  }

export const Password = ({isValid}) => { 
    // if(isValid){
    //  return <ValidPassword />
    // }
    // return <InvalidPassword />

    // Conditional rendering using ternary operator
    return isValid ? <ValidPassword/> : <InvalidPassword />
}
