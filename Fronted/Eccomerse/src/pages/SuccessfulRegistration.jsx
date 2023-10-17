
import { Link } from 'react-router-dom';

export function SuccessfulRegistration() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">

          <form>
            <h1 className="title">Thanks for joining us!!</h1>

            <p className="social-text">Successful registration</p>

          </form>

        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Now you can log in</h3>
            <p>Now you can log in to buy your favorite consoles</p>
            <Link to="/login">
              <button type="button" className="btn transparent" id="sign-iN-btn">
                Sign In
              </button>
            </Link>
          </div>
          <img src="/src/assets/img/20.png" className="image" alt="" />
        </div>

      </div>
    </div>
  );
}
