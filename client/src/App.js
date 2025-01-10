import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./Component/Menu";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import PrivateRoute from "./AuthGuard/PrivateRoute";
import Dashboard from "./Pages/User/Dashboard";
import Profile from "./Pages/User/Profile";
function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ToastContainer autoClose={4000} position="top-right" />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/Profile"} element={<Profile />} />
        </Route>
        <Route path={`/*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
