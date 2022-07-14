import React from 'react'
import { useState } from 'react'
import "../Styles/login.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { auth } from './firebase'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();


const Login = () => {
    const naviagte = useNavigate();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
 
    
    const signIn = (e) => {
        e.preventDefault(); // No refreshing in React
        // Firebase code
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            toast.success("Login Successfully")
            naviagte('/')
        })
        .catch(error => toast.error('Check credentials'))
             
    }

    const register = (e) => {
        e.preventDefault();
        // Firebase code
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=> {
            console.log(auth);
            toast.success('User created successfully')
            naviagte('/')
        })
        .catch(error => toast.error('User already exist'))
         
    }
    return (
        <>
            <div className='login'>
                <Link to="/">
                    <img
                        className='login_logo'
                        src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" />
                </Link>

                <div className="login_container">
                    <h1>Sign In</h1>
                    <form>

                        <h5>E-mail</h5>

                        <input 
                          type="text" 
                          value={email} 
                          onChange={e => setemail(e.target.value)} 
                        />

                        <h5>Password</h5>
                        <input 
                            type="password" 
                            value={password}
                            onChange={e => setpassword(e.target.value)}
                        />

                        <button type='submit' onClick={signIn} className='login_signInButton' >Sign In</button>
                    </form>
                    <p>
                        By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.
                    </p>
                    <button onClick={register} className='login_registerButton'>Create your Amazon account</button>
                </div>
            </div>
        </>
    )
}

export default Login
