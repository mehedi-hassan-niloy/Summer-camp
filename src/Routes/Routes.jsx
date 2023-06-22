import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../LayOut/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../LayOut/Dashboard";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import Classes from "../Pages/Classes/Classes";
import MyClasses from "../Pages/MyClasses/MyClasses";
import Payment from "../Pages/Payment/Payment";
import AddClass from "../Pages/Dashboard/Add Class/AddClass";
import MyEnrollClass from "../Pages/Dashboard/MyEnrollClass/MyEnrollClass";
import Instructor from "../Pages/Home/Instructors/Instructor";
import PaymentHistory from "../Pages/Dashboard/MyEnrollClass/PaymentHistory";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Error from "../Pages/Error/Error";
import MyClass from "../Pages/MyClass/MyClass";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: 'signup',
            element: <SignUp/>
        },
        {
            path: 'classes',
            element: <Classes/>
        },
        {
            path: 'instructor',
            element: <Instructor/>
        },

        {
            path: 'dasboard',
            element: <Dashboard/>,
            errorElement:<Error></Error>,
            children:[
              {
                path: 'mangeuser',
                element:<ManageUser/>
              },
              {
                path: 'mangeclass',
                element:<ManageClasses/>
              },
              {
                path: 'mangeuser',
                element:<ManageUser/>
              },
              {
                path: 'myclasses',
                element:<MyClasses/>
              },
              {
                path: 'myenrollclass',
                element:<MyEnrollClass/>
              },
              {
                path: 'Paymenthistory',
                element:<PaymentHistory/>
              },
              {
                path: 'payment',
                element:<Payment/>
              },
              {
                path:'addclass',
                element: <AddClass/>
              },
              {
                path:'myclass',
                element: <MyClass/>
              }
            ]
        }
      ]
    }
])
export default router;