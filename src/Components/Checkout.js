import React from 'react'
import { useStateValue } from '../Store/Context';
import "../Styles/Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img className='checkout_ad' src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/50039b9f-a5ac-4da9-9935-18bb325104f81656584152233-Flood_Banner_App---Website-Desktop_Final-2.png"
            alt=""
          />
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {
              basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating} />
              ))
            }
          </div>
        </div>
        <div className="checkout_right">

          <Subtotal />
        </div>

      </div>

    </>
  )
}

export default Checkout