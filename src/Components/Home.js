import React,{useState, useEffect} from 'react'
import "../Styles/Home.css"
import Product from './Product'

const Home = (props) =>  {

  return (
    <div className='home'>
       <div className="home_container">
         <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/July/GW/Weights/V1/3000x1200_1._CB633252119_.jpg" alt="" />

          <div className="home_row_one">

          </div>
         <div className="home_row">
         <Product 
              id="98239"
              title="Mens Cotton Jacket" 
              image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              price={55.99}
              rating={4}
              />
            <Product
             id="925685"
             title="Mens Casual Slim Fit" 
             image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
             price={15.93}
             rating={2}
            />
            <Product
             id="954756"
             title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet" 
             image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
             price={695}
             rating={4}
            />
         </div>
         
         <div className="home_row">
            <Product 
              id="98569"
              title="The leather bag" 
              image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              price={29.9}
              rating={5}
              />
            <Product
             id="95485"
             title="Mens Casual Premium Slim Fit T-Shirts" 
             image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
             price={22.3}
             rating={4}
            />
            
         </div>
         <div className="home_row">
         <Product 
              id="125239"
              title="DANVOUY Womens T Shirt Casual Cotton Short" 
              image="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
              price={12.99}
              rating={1}
              />
            <Product
             id="985695"
             title="Opna Women's Short Sleeve Moisture" 
             image="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
             price={7.93}
             rating={4}
            />
            <Product
             id="85696"
             title="MBJ Women's Solid Short Sleeve Boat Neck V" 
             image="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
             price={65}
             rating={1}
            />
         </div>

         <div className="home_row">
           <Product
            id="954366"
            title="Solid Gold Petite Micropave" 
            image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
            price={168}
            rating={3}
           />
         </div>
        
         <div className="home_row">
         <Product 
              id="98239"
              title="Rain Jacket Women Windbreaker Striped Climbing Raincoats" 
              image="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
              price={39.99}
              rating={5}
              />
            <Product
             id="24565"
             title="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket" 
             image="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
             price={29.93}
             rating={3}
            />
            <Product
             id="456756"
             title="BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats" 
             image="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
             price={56.5}
             rating={4}
            />
         </div>
       </div>
    </div>
  )
}

export default Home
