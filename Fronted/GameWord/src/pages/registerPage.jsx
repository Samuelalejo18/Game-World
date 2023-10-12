import React from 'react';
import Register from '../components/Register/RegisterInput';
import '../styles/Register.css';

function RegisterPage() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">

          <Register />

        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Are you already logged in?</h3>
            <p>Log in to enter the main page</p>
            <button type="button" className="btn transparent" id="sign-iN-btn">
              Sign In
            </button>

          </div>
          <img src="/src/assets/img/2.png" className="image" alt="" />
        </div>

      </div>
    </div>

  );
}

export default RegisterPage;
