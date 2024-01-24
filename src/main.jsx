import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

// react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Blog from './Blog/Blog.jsx';
import Shop from './Shop/Shop.jsx';
import SingleProduct from './Shop/SingleProduct.jsx';
import CartPage from './Shop/CartPage.jsx';
import AboutUs from './Shop/AboutUs.jsx';
import { ContactUs } from './Shop/ContactUs.jsx';
import LoginDemo from './Components/LoginDemo.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/shop/:id',
        element: <SingleProduct/>
      },
      {
        path: '/cart-page',
        element: <CartPage/>
      },
      {
        path: '/about',
        element: <AboutUs/>
      },
      {
        path: '/contact',
        element: <ContactUs/>
      },
    ]
  },
  {
    path: '/login',
    element: <LoginDemo/>
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
