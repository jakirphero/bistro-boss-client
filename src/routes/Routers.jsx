import {
    createBrowserRouter,
  } from "react-router-dom";

 
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secrete from "../pages/Shard/secrete/Secrete";
import Main from "../layout/Main";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/dashboard/MyCart";
import Users from "../pages/Dashboard/Allusers/Users";
import AdminRoute from "./AdminRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'menu',
          element: <Menu></Menu>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: '/secrete',
          element: <PrivateRoute><Secrete></Secrete></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'myCart',
          element: <MyCart></MyCart>
        },
        {
          path: 'users',
          element: <AdminRoute><Users></Users></AdminRoute>
        }
      ]
    }
  ]);