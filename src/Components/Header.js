import React from 'react'
import '../Styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from '../Store/Context';
import { auth } from './firebase';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();

const Header = () => {

    const[{ basket, user }, dispatch]= useStateValue();

    const handleAuthentication = () => {
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className="logo">
            <Link to="/">
               <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            </div>
            <div className="header_search">
                <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon' onClick={()=>toast.info("Coming soon")}/>
            </div>

            <div className="header_nav">

                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineOne">
                        Hello {!user ? "Guest" : user.email}
                    </span>
                <Link to={!user && '/login'}>
                    <span className="header_optionLineTwo">
                        {user ? 'Sign Out' : 'Sign In' }
                    </span>
                </Link>
                </div>

                <div className="header_option" onClick={()=>toast.info("Coming soon")}>
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header_option" onClick={()=>toast.info("Coming soon")}>
                    <span className="header_optionLineOne">
                       Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header_optionBasket">

                   <Link to="/checkout"> <aside> <ShoppingBasketIcon /> </aside> </Link> 
                    
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span> 
                </div>

            </div>

        </div>
    )
}

export default Header
