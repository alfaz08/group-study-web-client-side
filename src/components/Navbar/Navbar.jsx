import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {

  const {user,logOut} =useAuth();


  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>toast(error))
  }

  const navLinks = <>
  <li><NavLink  to="/">Home</NavLink></li>
  {
      user ? null :<li><NavLink to="/login">Login</NavLink></li>
    }
    {
      user ? null :<li><NavLink to="/register">Register</NavLink></li>
    }
  <li><NavLink to="/allassignment">All Assignment</NavLink></li>
  {
    user && 
    <>
    <li><NavLink to="/createassignment">Create Assignment</NavLink></li>
    <li><NavLink to="/myassignment">My Assignment</NavLink></li>
    </>
  }


</>



  return (
    <div className="navbar bg-custom-color">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navLinks}
        </ul>
      </div>
     <img className="h-16" src="https://i.ibb.co/x1wP1Zd/study-group-logo-free-vector.jpg" alt="" />
    </div>
    <div className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal px-1">
       {navLinks}
      </ul>
    </div>
    <div className="navbar-end">
    {
      user?
      <>
      {
        user.displayName?
        <span className="mr-2 p-2 bg-base-200 font-bold h-12 flex items-center rounded-xl">{user.displayName}</span>
        :
        <span className="mr-2  bg-base-200 h-12 flex items-center rounded-xl">{user.email}</span>
      }
      {
        user.photoURL?
        <img className=" rounded-full mr-2 w-12 h-12" src={user.photoURL} />
        :
        <img className=" w-12" src="/src/assets/person.png" /> 
     }
    <a className="btn bg-base-200 font-bold hover:bg-black hover:text-white" onClick={handleLogOut}>Sign Out</a>
      </>
      :
      <Link to="/login"><button className="btn  bg-base-200  font-bold hover:bg-black hover:text-white">Login</button></Link>
    }
  </div>
  </div>
  );
};

export default Navbar;