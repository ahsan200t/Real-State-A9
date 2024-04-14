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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element:<PropertyDetails></PropertyDetails>,
        loader: ()=> fetch('/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
