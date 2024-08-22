import React from "react";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="login-signup-container">
        <h1 className="font-3xl">Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder="Your Name" />
          <input type="email" name="" id="" placeholder="Your Email" />
          <input type="password" name="" id="" placeholder="••••••••" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
      </div>
    </div>
  );
};

export default LoginSignup;
