import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'
import { BlogCard } from '../components/BlogCard';

export const ViewBlogsPage = () => {
  const blogsReference = collection(db, 'blogs');
  const [blogs, setBlogs] = useState([]);


  const getBlogsList = async () => {
    const blogs = await getDocs(blogsReference);
    const extractedBlogData = blogs.docs.map((doc) => {
        return {
            id: doc.id,
            data: doc.data()
        };
    })

    setBlogs(extractedBlogData);
  }

  useEffect(() => {
    getBlogsList();
  }, [])

  return (
    <div className='grid grid-cols-3 gap-8'>
        {
            blogs.map((data, index) => {
                return <BlogCard key={index} blog={data} />
            })
        }
    </div>
  )
}
