import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Navbar = () => {
  const {logOut, user}=UseAuth();
  const navLinks = (
    <>
      <li>
        <NavLink to='/'  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-primary border border-primary font-semibold" : "font-semibold"
          }>Home</NavLink>
      </li>
      <li>
        <NavLink to='/update profile' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-primary border border-primary font-semibold" : "font-semibold"
          }>Update Profile</NavLink>
      </li>
      <li>
        <NavLink to='/feedback' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-primary border border-primary font-semibold" : "font-semibold"
          }>FeedBack</NavLink>
      </li>
      <li>
        <NavLink to='/register' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-primary border border-primary font-semibold" : "font-semibold"
          }>Register</NavLink>
      </li>
     
    </>
    
  );
  return (
     
   <div className="navbar bg-base-100 mt-6 mb-10 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown dropdown-bottom z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navLinks}
          </ul>
        </div>
        <a className="text-2xl md:text-4xl font-semibold font-poppins">Haven Vacation</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLinks}
        </ul>
      </div>

      <div className="navbar-end"> 
      {
      
         user?  
         <div className="dropdown dropdown-bottom flex items-center">
          <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
       <img src={user?.photoURL || "https://i.ibb.co/2ykmyLP/ahsan.jpg"} />          
       </div>      
       </label> 
         <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-1 z-[1] p-1 shadow-sm bg-base-100 rounded-box w-30">
          <li className="btn btn-sm btn-ghost">{user?.displayName || "name not found"}</li>
         
         </ul>

           <Link to='/'> 
           <button onClick={logOut} className="btn btn-sm btn-secondary">Logout</button>
           </Link>
          
         </div>
          :
          <Link to='/login'>
         <button className="btn btn-sm btn-primary">Login</button>
         </Link>
      }           
     </div>
      </div>  
  );
};

export default Navbar;
