import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { collection, deleteDoc, doc } from "firebase/firestore";

export const BlogCard = ({ blog }) => {
  const [user, setUser] = useState({});
  const [isMyBlog, setIsMyBlog] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        if (user.uid === blog.data.author.id) {
          setIsMyBlog(true);
        }
      }
    });
  }, []);

  const deleteBlog = async () => {
    // We have to write a logic
    console.log(blog, 'data');
    // We can check later, how to fix it.
    const blogDoc = doc(db, 'blogs', blog.id);
    const doc = await deleteDoc(blogDoc);
    console.log('Document Deleted');
  };

  return (
    user && (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={blog.data.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog.data.title}</div>
          <p className="text-gray-700 text-base">
            {blog.data.description || "No Description found"}
          </p>
          <p>Category: {blog.data.category}</p>
          <p>Author: {blog.data.author.email}</p>
          {/* <p>Created On: {blog.created_at}</p> */}
        </div>

        {isMyBlog && (
          <button
            className="w-full !bg-red-500 text-white py-2 rounded-md"
            onClick={deleteBlog}
          >
            Delete
          </button>
        )}
      </div>
    )
  );
};
