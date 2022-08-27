import React, { useState, useEffect } from 'react'
import '../styles/cart.css'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0)

  const handleRemove = (id) => {
    const arr = cart.filter((data) => data.id !== id)
    setCart(arr)
    handlePrice()
  }

  const handlePrice = () => {
    let ans = 0
    cart.map((data) => (ans += data.amount * data.price))
    setPrice(ans)
  }

  useEffect(() => {
    handlePrice()
  })

  return (
    <article>
      {cart.map((data) => {
        return (
          <div className="cart_box" key={data.id}>
            <div className="cart_img">
              <img src={data.image} alt="" />
              <p>{data.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(data, 1)}>+</button>
              <button>{data.amount}</button>
              <button onClick={() => handleChange(data, -1)}>-</button>
            </div>
            <div>
              <span>{data.price}</span>
              <button onClick={() => handleRemove(data.id)}>Remove</button>
            </div>
          </div>
        )
      })}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>$ - {price}</span>
      </div>
    </article>
  )
}

export default Cart
