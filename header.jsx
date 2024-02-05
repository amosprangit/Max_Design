import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-orange-800 text-white fixed w-full z-10 p-2 top-0">
        <nav className="navbar container">
          <Link className="navbar-brand flex" to="/Home">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D"
              alt="Max-design Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <h4 className="ml-5 text-white">Max-Design</h4>
          </Link>
          <ul className="flex flex-col md:flex-row md:space-x-14">
            <li className="p-2 hover:bg-amber-700 rounded-lg cursor-pointer">
              <Link to="/Home">Home</Link>
            </li>
            <li className="p-2 hover:bg-amber-700 rounded-lg cursor-pointer">
              <Link to="/About">About</Link>
            </li>
            <li className="p-2 hover:bg-amber-700 rounded-lg cursor-pointer">
              <Link to="/Design">Design</Link>
            </li>
            <li className="p-2 hover:bg-amber-700 rounded-lg cursor-pointer">
              <Link to="/SignIn">SignIn</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
