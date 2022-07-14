import React from 'react'
import "../Styles/Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../Store/Context'
import { getBasketTotal } from '../Store/reducer';
import { useNavigate } from "react-router-dom";

function Subtotal() {

  const[{basket},dispatch] = useStateValue();
  const navigate = useNavigate();
 
  return (
    <div className='subtotal'>
            <CurrencyFormat
              renderText={(value)=> (
                <>
                   <p>
                       Subtotal ({basket.length} items): <strong>{value}</strong>
                   </p>
                   <small className='subtotal_gift'>
                     <input type="checkbox" /> This order contains a gift
                   </small>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          <button className='button_20' onClick={e => navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal