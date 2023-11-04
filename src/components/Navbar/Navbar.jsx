import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = <>
  <li><NavLink  to="/">Home</NavLink></li>
  <li><NavLink to="/login">Login</NavLink></li>
  <li><NavLink to="/register">Register</NavLink></li>

</>



  return (
    <div>
      <div className="navbar bg-custom-color">
  <div className="navbar-start">
    <div className="dropdown">
     <img src="https://i.ibb.co/x1wP1Zd/study-group-logo-free-vector.jpg" alt="" className="h-16" />
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Online Group Study</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;