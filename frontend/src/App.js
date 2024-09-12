import { useEffect } from "react"
import "./App.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"


// Pages
import { getUserDetails } from "./services/operations/profileAPI"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail"
import { ACCOUNT_TYPE } from "./utils/constants"
import Error from "./pages/Error"



// Components
import Navbar from "./components/Common/Navbar"
import OpenRoute from "./components/Core/Auth/OpenRoute"
import PrivateRoute from "./components/Core/Auth/PrivateRoute"
import MyProfile from "./components/Core/Dashboard/MyProfile"
import MyTeachers from "./components/Core/MyTeachers"
import Chatbot from "./components/Core/Chatbot"
import Result from "./components/Core/Result"
// import attendance from "./components/Core/attendance"
import Attendance from "./components/Core/Attendance"
import Mentor from "./components/Core/Mentor"

import Dashboard from "./pages/Dashboard"
import Instructor from "./components/Core/Dashboard/Instructor/Instructor"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)
  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
  }, [])

  return (
    <div className="flex min-h-screen w-screen flex-col bg-[#ebebeb] font-inter">
      <Navbar />
      


      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Open Route - for Only Non Logged in User */}
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        
        
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/chatbot" element={<Chatbot />} />
          <Route path="dashboard/attendance" element={<Attendance />} />
          <Route path="dashboard/mentor" element={<Mentor />} />
          <Route path="dashboard/result" element={<Result />} />
          <Route path="dashboard/teachers" element={<MyTeachers />} />




          {/* Route only for Teacher */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              
              
            </>
          )}
          {/* Route only for Students */}
          {(user?.accountType === ACCOUNT_TYPE.STUDENT || user?.accountType === ACCOUNT_TYPE.STUDENT) && (
            <>
              {/* <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              /> */}
            </>
          )}
        </Route>

       
        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>

      </div>
  );
}

export default App;
