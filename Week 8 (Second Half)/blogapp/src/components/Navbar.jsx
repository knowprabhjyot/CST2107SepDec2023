import React, { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser.email);
    }
  }, []);

  const handleSignOut = async () => {
    await signOut(auth)
    navigate('/login');
  }

  return (
    <nav className="bg-blue-100 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          Hello, {user}
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <button onClick={handleSignOut} className="w-full !bg-blue-500 text-white px-4 py-2 rounded-md">
            Signout
          </button>
        </div>
      </div>
    </nav>
  );
};
