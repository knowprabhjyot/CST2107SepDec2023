import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { CreateBlog } from "../components/CreateBlog";
import { auth } from "../../firebaseConfig";

export const HomPage = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    user && (
      <div>
        <Navbar user={user} />
        <CreateBlog user={user} />
      </div>
    )
  );
};
