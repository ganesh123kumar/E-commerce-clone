import React,{useEffect, useState} from 'react'
import { useStateValue } from '../Store/Context';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom'
import '../Styles/Payment.css'
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../Store/reducer';
import axios from './axios';
import { useNavigate } from "react-router-dom";
import { db } from './firebase';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
const Payment = () => {

    const[{ basket, user }, dispatch]= useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setclientSecret] = useState(true);

    const navigate = useNavigate();

    useEffect(()=>{
        // generate the special stripe secret which allow us to charge a customer
        const getClientSecret = async () => {
          const response = await axios({
            method: 'post',
            // Stripe expects the total in a currency subunits.
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
          });
          setclientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log("The secret is", clientSecret);
    console.log(user);

    const handleSubmit = async (e) => {
          e.preventDefault();
          setProcessing(true);

          const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
              card: elements.getElement(CardElement)
            }
          }).then(({ paymentIntent}) => {
            // paymentIntent = payment confirmation

            // db
            // .collection('users')
            // .doc(user._delegate.uid)
            // .collection('orders')
            // .doc(paymentIntent._delegate.uid)
            // .set({
            //     basket: basket,
            //     amount: paymentIntent.amount,
            //     created: paymentIntent.created
            //   })


            setSucceeded(true);
            setError(null);
          
            setProcessing(false);
            dispatch({
              type: 'EMPTY_BASKET'
            })
            navigate('/orders');
          })
    }

    const handleChange = (e) => {
        // Listen for the Chnages in the card elements
        // and display any errors in the customer types their card.
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    const notification = () => {
        toast.info('Coming Soon')
    }
  return (
    <>
     <div className="payment">
        <div className="payment_container">
          <div className="checkout_payment">
          <h1>
            Checkout (
              <Link to="/checkout">{basket.length} items</Link>
              )
          </h1>
          </div>
            {/* Payment Section - delivery address */}
                <div className="payment_section">
                     <div className="payment_title">
                        <h3>Delivery Address</h3>
                     </div>
                     <div className="payment_address">
                           <p>{user?.email}</p>
                           <p>Hno. 224, Dasna</p>
                           <p>Ghaziabad, Uttar Pradesh</p>
                        </div>   
                </div>

            {/* Payment Section - Review Item */}
            <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
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
            {/* Payment Section - Payment method */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                     <form >
                     {/* <form onSubmit={handleSubmit}> */}
                        <CardElement onChange={handleChange}/>
                      <div className="payment_priceContainer">
                      <CurrencyFormat
                          renderText={(value)=> (
                            <>
                              <p>
                                  Order Total :  <strong>{value}</strong>
                              </p>
                              
                            </>
                          )}
                          decimalScale={2}
                          value={getBasketTotal(basket)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />
                        {/* <button disabled={processing || disabled || succeeded}>
                          <span>
                            {processing ? <p>Processing </p> : "Buy Now"}
                          </span>
                        </button> */}
                 <Link to='/'><button className='button_45' onClick={notification}>Coming Soon</button></Link>

                      </div>
                      { error && <div>{error}</div> }
                     </form>
                </div>

            </div>
        </div>
     </div>
    
    </>
  )
}

export default Payment