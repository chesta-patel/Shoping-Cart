import React, { useState, useEffect } from 'react'
import Amazon from './components/Amazon'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { fetchProduct } from './redux/actions/index'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        let updateData = json?.map((d) => {
          return { ...d, amount: 1 }
        })
        dispatch(fetchProduct(updateData))
      })
  }, [dispatch])

  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  const handleClick = (data) => {
    if (cart.indexOf(data) !== -1) return
    setCart([...cart, data])
  }

  const handleChange = (data, d) => {
    const ind = cart.indexOf(data)
    const arr = cart
    arr[ind].amount += d
    if (arr[ind].amount <= 0) arr[ind].amount = 1
    setCart([...arr])
  }
  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  )
}

export default App
