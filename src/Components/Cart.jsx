import React from 'react'

// Conditional rendering using && operator
export const Cart = () => {
    const items = ["brush", "book", "pen", "fruits"]

  return (
    <>
    <h1>Cart 🛒</h1>
    {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}
    <ul>
        <h3>Products ⬇️</h3>
        {items.map((item) => {
          return <li key={Math.random()}>{item}</li>
        })}
         
    </ul>
    </>
  )
}
