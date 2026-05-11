import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../style/auth-shared.css'
import axios from 'axios';

const FoodPartnerLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:8080/api/auth/food-partner/login", {
      email,
      password
    }, { withCredentials: true });

    console.log(response.data);
    navigate("/");
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="partner-login-title">
        <header>
          <h1 id="partner-login-title" className="auth-title">Partner Sign In</h1>
          <p className="auth-subtitle">Sign in to manage your food uploads.</p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
          </div>
          <button className="auth-submit" type="submit">Sign In</button>
        </form>
        <div className="auth-alt-action">
          New partner? <Link to="/food-partner/register">Create account</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
