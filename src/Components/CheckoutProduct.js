import React from 'react'
import { useStateValue } from '../Store/Context'
import "../Styles/CheckoutProduct.css"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

const CheckoutProduct = ({ id, image, title, price, rating }) => {

    const[{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        toast.warning("Removed from cart")
        // Remove items from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt="" />
            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_,i)=> {
                      return <p> 🌟 </p>
                    })
                }
            </div>
            <button className='button_26' onClick={removeFromBasket} >Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct