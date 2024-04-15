import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorElement from './components/ErrorElement/ErrorElement';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivetRout from './components/PrivetRout/PrivetRout';
import { HelmetProvider } from 'react-helmet-async';
import FeedBack from './components/FeedBack/FeedBack';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('/data.json')
        
      },
      {
        path:'/update profile',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:'/property-details/:id',
        element:
        <PrivetRout>
          <PropertyDetails></PropertyDetails>
        </PrivetRout>,
        loader: ()=> fetch('/data.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/feedback',
        element:<PrivetRout><FeedBack></FeedBack></PrivetRout>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
