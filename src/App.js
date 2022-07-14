import React,{useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import {BrowserRouter,
        Route, 
        Routes
        } 
from "react-router-dom";
import { auth } from './Components/firebase';
import { useStateValue } from './Store/Context';
import Payment from './Components/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Components/Orders';
import Footer from './Components/Footer';


const promise = loadStripe('pk_test_51LJc8XSGnfXui5DexoEgb1IwnOnfRDGUmQG6bkdcah4aYRZPEvNew0USvNRxbr1euIsj05Ap1bXrlMz7rprN1tUT00tW5LKDW1');


function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        // The user just logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
          // The user just logged out.
          dispatch({
            type: 'SET_USER',
            user: null
          })
      }
    })
  },[])

  return (
    <BrowserRouter>
       <div className="app">  
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<><Header/> <Home/> </>}/>
        </Routes>
        <Routes>
          <Route path="/orders" element={<><Header/> <Orders/> </>}/>
        </Routes>
        <Routes>
          <Route path="/checkout" element={<><Header/> <Checkout/> </>}/>
        </Routes>
        <Routes>
          <Route path="/footer" element={<> <Footer/> </>}/>
        </Routes>
        <Routes>
          <Route path="/payment" element={<>
          <Elements stripe={promise}>
          <Header/> 
          <Payment/>
          </Elements> 
          </>}/>
        </Routes>
        <Footer/>
       </div>
    </BrowserRouter>
  );
}

export default App;
