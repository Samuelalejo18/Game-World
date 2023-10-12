/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { redirect } from 'react-router-dom';
import { loginRequest } from '../../api/auth';

function Login() {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line consistent-return
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await loginRequest(data);
      if (res.status === 200) {
        console.log('entre');
        return redirect('/wordgame');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sign-form"
    >
      <h2 className="title">Sign In</h2>
      <div className="input-field">
        <i className="fas fa-envelope" />
        <input type="email" placeholder="email" {...register('email', { required: true })} />
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input type="password" placeholder="password" {...register('password', { required: true })} />
      </div>
      <button type="submit" className="btn solid">login</button>
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="https://www.facebook.com/" className="social-icon">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com/" className="social-icon">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.google.com/" className="social-icon">
          <i className="fab fa-google" />
        </a>
        <a href="https://www.linkedin.com/home" className="social-icon">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </form>

  );
}

export default Login;
