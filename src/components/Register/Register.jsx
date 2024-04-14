import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Register = () => {
  const { createUser } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const {email, password}=data;
    createUser(email, password)
    .then((result) => {
      if (result.user) {
        navigate(location?.state || '/')
      }
    });
  }
  return (
    <div>
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
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
              <div>
                <p>Already Have An Account? <Link to='/login' className="link link-accent no-underline">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
