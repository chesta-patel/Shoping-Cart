import React from 'react'
// import list from '../data'
import Card from './Card'
import '../styles/amazon.css'
import { useSelector } from 'react-redux'

const Amazon = ({ handleClick }) => {
  const productList = useSelector(
    (state) => state.fetchProductReducers.productList
  )
  return (
    <section>
      {/* {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))} */}
      {productList.map((data) => (
        <Card
          title={data?.title}
          price={data?.price}
          id={data['_id']}
          image={data?.image}
          handleClick={handleClick}
          key={data.id}
          data={data}
        />
      ))}
    </section>
  )
}

export default Amazon
