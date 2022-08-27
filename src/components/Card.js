import React from 'react'

const Card = ({ data, handleClick }) => {
  return (
    <div className="cards">
      <div className="image_box">
        <img src={data?.image} alt="" />
      </div>
      <div className="details">
        <p>{data?.title}</p>
        <p>Price - {data?.price}Rs</p>
        <button onClick={() => handleClick(data)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card

// id, title, autor, price, img
