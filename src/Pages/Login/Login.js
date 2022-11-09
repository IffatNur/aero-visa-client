import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import image from '../../image/bg.png';

const Login = () => {
  const {signIn} = useContext(AuthContext);
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .catch(error=> console.log(error))
    }
    return (
      <div className="grid grid-cols-2 bg-base-200">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign In</h1>
            </div>
            <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  name='email'
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                  name='password'
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type='submit' className="btn btn-primary">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='mt-20'>
          <img src={image} alt="" />
        </div>
      </div>
    );
};

export default Login;