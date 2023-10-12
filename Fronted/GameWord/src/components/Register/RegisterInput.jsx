/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/named */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUp, isAuthenticated /* errors: registerErros */ } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/SuccessfulRegistration');
  }, [isAuthenticated]);
  const onSubmit = handleSubmit(async (values) => {
  // console.log(values);
    signUp(values);
  });
  /*
  const onSubmit = async (data) => {
    data.phone = Number(data.phone);
    data.age = Number(data.age);
    console.log(data);
    try {
      await registerRequest(data);
    } catch (error) {
      console.log(error);
    }
     fetch('http://localhost:3000/welcome', { method: 'GET' })
       .then((res) => res.json())
      .then((data2) => console.log(data2))
      .catch((error) => console.log(error));
  };
*/
  return (

    <form
      // onSubmit={handleSubmit(onSubmit)}
      // className="sign-form"
      onSubmit={onSubmit}
    >
      <h2 className="title">Sign Up</h2>

      <div className="input-field">
        <i className="fas fa-user" />
        <input type="text" placeholder="name" {...register('name', { required: true })} />
        {errors.name && (
        <div className=" error">
          <p>
            ❌ Name is required
          </p>
        </div>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-user" />
        <input type="text" placeholder="last name" {...register('lastName', { required: true })} />
        {errors.lastName && (
        <div className=" error">
          <p>
            ❌ last name is required
          </p>
        </div>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-user" />
        <input type="number" placeholder="age" {...register('age', { required: true })} />
        {errors.age && (
        <div className=" error">
          <p>
            ❌ age is required
          </p>
        </div>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-user" />
        <input type="text" placeholder="address" {...register('address', { required: true })} />
        {errors.address && (
        <div className=" error">
          <p>
            ❌ address  is required
          </p>
        </div>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-user" />
        <input type="number" placeholder="Phone" {...register('phone', { required: true })} />
        {errors.address && (
        <div className=" error">
          <p>
            ❌ phone is required
          </p>
        </div>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-user" />
        <input type="text" placeholder="username" {...register('username', { required: true })} />
        {errors.username && (
        <div className=" error">
          <p>
            ❌ username is required
          </p>
        </div>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-envelope" />
        <input type="email" placeholder="email" {...register('email', { required: true })} />
        {errors.email && (
        <div className=" error">
          <p>
            ❌ email is required
          </p>
        </div>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input type="password" placeholder="password" {...register('password', { required: true })} />
        {errors.email && (
        <div className=" error">
          <p>
            ❌ password is required
          </p>
        </div>
        )}
      </div>
      <button type="submit" className="btn solid">Register</button>

      <p className="social-text">Or Sign up with social platforms</p>
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

export default Register;
