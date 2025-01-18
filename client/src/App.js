import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./Component/Menu";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import PrivateRoute from "./AuthGuard/PrivateRoute";
import Dashboard from "./Pages/User/Dashboard";
import Profile from "./Pages/User/Profile";
import Footer from "./Component/Footer";
import Collection from "./Pages/Collection";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
function App() {
  return (
    <>
      <Menu />
      <ToastContainer autoClose={4000} position="top-right" />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path={"/user/dashboard"} element={<Dashboard />} />
          <Route path={"/admin/dashboard"} element={<AdminDashboard />} />
          <Route path={"/user/Profile"} element={<Profile />} />
          <Route path={"/Collection"} element={<Collection />} />
        </Route>
        <Route path={`/*`} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
