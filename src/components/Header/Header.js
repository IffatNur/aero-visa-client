import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext);
  // console.log(user.displayName);
    return (
      <div>
        <div className="navbar bg-cyan-900 text-white pb-5">
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                <li>
                  <Link>{user?.displayName}</Link>
                </li>
                <li>
                  <Link className="text-orange-400">{user?.displayName}</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/addservices">Add Service</Link>
                </li>
                <li>
                  <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                  <Link to="/login">SignIn</Link>
                </li>
                <li>
                  <Link to="/register">SignUp</Link>
                </li>
                <li>
                  <Link>SignOut</Link>
                </li>
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl font-bold ">
              <FaPlaneDeparture className="mr-2 w-12 h-12 text-orange-400"></FaPlaneDeparture>
              Aero Visa
              <br /> Consultant
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/addservices">Add Service</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>

              {user?.email ? (
                <>
                  <li>
                    <Link>SignOut</Link>
                  </li>
                  <li>
                    <Link className="text-orange-400">
                      Welcome, {user?.displayName}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">SignIn</Link>
                  </li>
                  <li>
                    <Link to="/register">SignUp</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;