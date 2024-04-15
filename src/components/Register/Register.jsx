import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Register = () => {
  const { createUser, updateUserProfile } = UseAuth();
  const [showPassword, setShowPassword]=useState(false);
  const [registerError, setRegisterError]=useState("")
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const {email, password, image, fullName}=data;

    if(password.length<6){
      setRegisterError('Password should be at least 6 characters or longer')
      return;
    }
    if(!/[A-Z]/.test(password)){
      setRegisterError('Password should have at least one uppercase characters');
      return;
    }
    if(!/[a-z]/.test(password)){
      setRegisterError('Password should have at least one lowercase characters');
      return;
    }

    createUser(email, password)
    .then(() => {
      setSuccess("Successfully Registered")
      updateUserProfile(fullName, image)
       .then(()=>{
        navigate(location?.state || '/')
       })      
    })
    .catch((error)=>{
      setRegisterError(error.message)
    })
  }
  return (
    <div>
      <Helmet>
        <title>Haven Vacation/Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 mb-8">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Create Your Account!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  name="name"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && <span className="text-red-500">This field is required</span>}
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                  name="photo"
                  {...register("photo url", { required: true })}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                  
                />
                 <span className="absolute text-2xl right-3 bottom-3" onClick={()=>setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash>
                        : <FaEye></FaEye>
                    }
                </span>
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
              <div className="text-center">
                <p>Already Have An Account? <Link to='/login' className="link link-accent no-underline">Login</Link></p>
              </div>
            </form>
            {registerError && (
              <p className="text-red-600 text-center mb-2">{registerError}</p>
            )}
             {success && (
              <p className="text-green-700 text-center mb-2">{success}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
