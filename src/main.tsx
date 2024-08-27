/* eslint-disable react-refresh/only-export-components */
import './index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Homepage from './Home Page/HomePage';
import Loginpage from './Login Page/LoginPage';
import Signuppage from './Signup Page/Signuppage';
import Cartpage from './Cart Page/CartPage';
import Wishlistpage from './Wishlist Page/WishlistPage';



const Router = createBrowserRouter([
    {
      path: "",
      element: <Homepage/>,
      errorElement: <div><h1>Wrong URL!</h1></div>,
      children: [
        {
          path: "/login",
          element: <Loginpage/>
        },
        {
          path: "/signup",
          element: <Signuppage/>
        }
      ]
    },
    {
      path: "/cart",
      element: <Cartpage/>,
    },
    {
      path: "/wishlist",
      element: <Wishlistpage/>,
    },
    
    
    
    {
      path: "*",
      element: 
      <div>
        <h1>Click On Home Button!</h1>
        <Link to="/H001"><button>Home</button></Link>
      </div>,
    },
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <RouterProvider router={Router}/>
  // </React.StrictMode>,
);