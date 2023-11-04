import { useRoutes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { HomPage } from './pages/HomPage'
import { useEffect, useState } from 'react'
import { auth } from '../firebaseConfig'
import { ViewBlogsPage } from './pages/ViewBlogsPage'

function App() {


  // We will have a logic which will say if the user is logged in --> HomePage
  // if the user is not logged in then send them to login page 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user, 'user');
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    })
  }, [])

  let element = useRoutes(
    [
      {
        path: '/',
        element: isAuthenticated ?  <HomPage /> : <LoginPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <SignupPage />
      }, 
      {
        path: '/home',
        element: <HomPage />
      },
      {
        path: '/blogs',
        element: <ViewBlogsPage />
      }
    ]
  )

  return element;
}

export default App
