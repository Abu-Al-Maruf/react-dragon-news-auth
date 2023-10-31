import { Link, NavLink } from "react-router-dom";
import defaultUserImg from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);


  const handleLogout = () =>{ 
    logOut()
  }


  const navlink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/carrer"}>Carrer</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        <img className="w-10" src={defaultUserImg} alt="" />

        {
          user ? 
          <button onClick={handleLogout} className="bg-[#403F3F] py-2 px-10 hover:text-slate-400 text-white rounded">
            Log Out
          </button>
          : <Link to={"/login"}>
          <button className="bg-[#403F3F] py-2 px-10 hover:text-slate-400 text-white rounded">
            Login
          </button>
        </Link>
        }

        
      </div>
    </div>
  );
};

export default Navbar;
