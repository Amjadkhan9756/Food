import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../Style/auth-shared.css";


function UserLogin(){
    const navigate=useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = await axios.post("http://localhost:8080/api/auth/user/login",{
            email,
            password
        },{withCredentials:true});

        console.log(response.data);
        navigate("/");//redirect to home after login
    }
    return(
        <>
        <div className='auth-page-wrapper'>
            <div className='auth-card ' role='region' aria-lebelledby="user-login-title">
                <header>
                    <h1 id='user-login-title' className='auth-title'>Welcome back</h1>
                    <p className='auth-subtitle'>Sign in to continue your food journey.</p>
                </header>
                <from className="auth-from" onSubmit={handleSubmit} noValid>
                    <div className='field-group'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' name="email" type='email' placeholder='you@example.com' autoCapitalize='email'></input>
                    </div>
                    <div className='field-group'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' name='password' type='password' placeholder='password' autoCapitalize='current-password'></input>
                    </div>
                    <button className='auth-submit' type='submit'>Sign In</button>
                </from>
                <div className='auth-alt-action'>
                    New here? <a href='/user/register'>Create accont</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserLogin;