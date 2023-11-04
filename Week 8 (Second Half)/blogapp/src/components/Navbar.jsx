import React, { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = (props) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth)
    navigate('/login');
  }

  return (
    <nav className="bg-blue-100 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          Hello, {props.user.displayName || props.user.email}
        </a>

        <div className="flex gap-4" id="navbar-default">
          <Link to='/blogs' className="w-full !bg-blue-500 text-white px-4 py-2 rounded-md">
            ViewBlogs
          </Link>
          <button onClick={handleSignOut} className="w-full !bg-blue-500 text-white px-4 py-2 rounded-md">
            Signout
          </button>
        </div>
      </div>
    </nav>
  );
};
