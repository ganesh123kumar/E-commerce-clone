import React from 'react'
import "../Styles/Product.css"
import { useStateValue } from "../Store/Context"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
const Product = ({id, title , image , price , rating}) => {

  const[ {basket} , dispatch] = useStateValue();
  console.log("this is basket >> " , basket);

  const addToBasket = () => {
    toast.success("Added to Cart!")
    //  Dispatch the item into the data layer....
       dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating
        },
       })
  }

  return (
    <div className='product'>
      <div className="product_info">
        <p className='product_title'>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_,i)=> {
               return <p>🌟</p>
          })}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket} >Add to basket</button>
           
    </div>
  )
}

export default Product