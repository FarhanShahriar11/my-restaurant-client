import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login/Login.jsx';
import Register from './components/Login/Register/Register.jsx';
import Chef_details from './components/chefDetails/Chef_details.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import BlogPage from './components/blogPage/BlogPage.jsx';
import Error from './components/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: 'chef/:id',
        element:<PrivateRoute> <Chef_details></Chef_details></PrivateRoute>,
        loader: ({params}) => fetch(`https://my-restaurant-server-farhanshahriar11.vercel.app/chef/${params.id}`)
    },
      {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
      path: '/blogPage',
      element: <BlogPage></BlogPage>
  },
  {
      path: '*',
      element: <Error></Error>
  }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
 </div>
)
