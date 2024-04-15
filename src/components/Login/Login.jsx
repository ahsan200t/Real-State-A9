import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {signInUser}=UseAuth()
    const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError]=useState("")
  const [success, setSuccess] = useState("");
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        const {email, password}=data;
        signInUser(email, password)
        .then((result) => {
          setSuccess("Successfully Login")
            if (result.user) {
              navigate(location?.state || '/')
            }
          })
          .catch(()=>{
            setLoginError("Password did not Match")
          })
      }


  return (
    <div>
      <Helmet>
        <title>Haven Vacation/Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 mb-8">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login Your Account!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
                <div>
                 
                 <button className="btn btn-secondary w-full">Login</button>

                </div>
              <div className="text-center">
                <p>Don't Have An Account? <Link to='/register' className="link link-accent no-underline">Register</Link></p>
              </div>
            </form>
            {loginError && (
              <p className="text-red-600 text-center mb-2">{loginError}</p>
            )}
             {success && (
              <p className="text-green-700 text-center mb-2">{success}</p>
            )}
            <div className="mb-4">
            <SocialLogin></SocialLogin>
            </div>
          </div>
          <ToastContainer />
        </div>
        
      </div>


      
    </div>
  );
};

export default Login;
