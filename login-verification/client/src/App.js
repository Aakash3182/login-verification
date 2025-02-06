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
import Collection from "./Pages/Collections";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AllCategory from "./Pages/Admin/Category/AllCategory";
import AddCategory from "./Pages/Admin/Category/AddCategory";
import UpdateCategory from "./Pages/Admin/Category/UpdateCategory";
import AllProducts from "./Pages/Admin/Products/AllProducts";
import AddProducts from "./Pages/Admin/Products/Addproducts";
import UpdateProducts from "./Pages/Admin/Products/UpdateProducts";
import CartPage from "./Pages/Cart/CartPage";
function App() {
  return (
    <>
      <Menu />
      <ToastContainer autoClose={4000} position="top-right" />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={"/Collection/:category"} element={<Collection />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route element={<PrivateRoute />}>
          <Route path={"/user/dashboard"} element={<Dashboard />} />
          <Route path={"/admin/dashboard"} element={<AdminDashboard />} />
          <Route path={"/user/Profile"} element={<Profile />} />
          <Route path={`/category`} element={<AllCategory />} />
          <Route path={`/category/add`} element={<AddCategory />} />
          <Route path={`/category/edit/:id`} element={<UpdateCategory />} />
          <Route path={`/products`} element={<AllProducts />} />
          <Route path={`/products/add`} element={<AddProducts />} />
          <Route path={`/products/edit/:id`} element={<UpdateProducts />} />
        </Route>
        <Route path={`/*`} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
