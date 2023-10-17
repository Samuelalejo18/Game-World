

import { Link } from 'react-router-dom';
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
          <h3>Back to the shop</h3>
       
          <Link to="/shop">
                 <button className='shop1'> ⏪ Shop 🛍️  </button>
                  </Link>
            <h3>Are New here?</h3>
            <p>Register so you can log in</p>
            <Link to="/register">
              <button type="button" className="btn1 transparent" id="sign-iN-btn1">

                Sign Up

              </button>
            </Link>
          </div>
          <img src="/src/assets/img/1.png" className="image" alt="" />
        </div>

      </div>
    </div>

  );
}

export default LoginPage;
