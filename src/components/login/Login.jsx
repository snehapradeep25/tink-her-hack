import React from 'react';
import './Login.css';
import pic1 from '../assets/pic1.png';  

const Login = () => {
  return (
    <div className="login-container" style={{ backgroundImage: 'url(${pic1})' }}> {/* Use the imported image */}
      <div className="login-form">
        <h1 className="login-title">Login</h1>
        <form>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="form-footer">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;