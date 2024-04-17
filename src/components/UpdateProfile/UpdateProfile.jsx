import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const UpdateProfile = () => {
  const { updateUserProfile, user, setUser } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { fullName, photoURL, email } = data; 
      updateUserProfile(fullName,photoURL, email)
      .then(()=>{
          toast('successfully Data Updated')
          setUser(true)
      })
      .catch(error=>{
          console.log(error.message)
        
      })
    
  };
  console.log(user)
  return (
    <div>
      <Helmet>
        <title>Haven Vacation/UpdateProfile</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200 mb-8">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Update Your Profile!</h1>
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
                  defaultValue={user?.displayName}
                  name="fullName"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                  defaultValue={user?.photoURL}
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-secondary">Save Change</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateProfile;
