import { Link } from 'react-router-dom';
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
            <h3>Back to the shop</h3>

            <Link to="/shop">
              <button type="button" className="shop1"> ⏪ Shop 🛍️  </button>
            </Link>
            <h3>Are you already logged in?</h3>
            <p>Log in to enter the main page</p>
            <Link to="/login">
              <button type="button" className="btn1 transparent" id="sign-iN-btn">
                Sign In
              </button>
            </Link>
          </div>
          <img src="/src/assets/img/2.png" className="image" alt="" />
        </div>

      </div>
    </div>

  );
}

export default RegisterPage;
