import React from 'react';

import Login from '../components/Login/LoginInput';

import '../styles/Login.css';

function LoginPage() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">

          { Login()}

        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Are New here?</h3>
            <p>LRegister so you can log in</p>
            <button type="button" className="btn transparent" id="sign-iN-btn">
              Sign Up
            </button>

          </div>
          <img src="/src/assets/img/1.png" className="image" alt="" />
        </div>

      </div>
    </div>

  );
}

export default LoginPage;
