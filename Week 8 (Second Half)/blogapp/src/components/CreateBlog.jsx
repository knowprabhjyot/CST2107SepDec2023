import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const CATEGORY_LIST = [
  {
    label: "Tech",
    value: "tech",
  },
  {
    label: "Fashion",
    value: "fashion",
  },
  {
    label: "Food",
    value: "food",
  },
  {
    label: "Travel",
    value: "travel",
  },
  {
    label: "Sports",
    value: "sports",
  },
];

export const CreateBlog = (props) => {
  const blogCollectionReference = collection(db, "blogs");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    createdAt: new Date(),
  });

  useEffect(() => {
    if (props.user) {
      setFormData((prevState) => {
        return {
          ...prevState,
          author: {
            id: props.user.uid,
            email: props.user.email,
          },
        };
      });
    }
  }, []);

  const uploadImageUrl = async (e) => {
    setFormData({ ...formData, image: e.target.files[0] });

    const storageRef = ref(storage, `images/${Date.now()}/blogs`);
    const imageUpload = await uploadBytes(storageRef, e.target.files[0]);
    const getImageUrl = await getDownloadURL(imageUpload.ref);

    setFormData({
      ...formData,
      image: getImageUrl,
    });
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();

    // Try and attempt upload an image if this works , then we pass that url to the
    // Image we are trying to upload

    try {
      const data = await addDoc(blogCollectionReference, formData);
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
    console.log(formData, "formData");
  };

  return (
    props.user && (
      <div>
        <form className="p-8" onSubmit={handleCreateBlog}>
          <div>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Blog Title
              </label>
              <input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Blog Title Here"
                required
              />
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Blog Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Blog Description Here"
                required
              />
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a Category</option>
                {CATEGORY_LIST.map(({ label, value }, index) => {
                  return (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                onChange={(e) => uploadImageUrl(e)}
                className="block  w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="w-48 !bg-blue-500 text-white py-2 rounded-md"
              >
                Create Blog
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  );
};
