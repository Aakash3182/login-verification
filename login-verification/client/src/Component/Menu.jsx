import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";

function Menu() {
  const context = useAuth();
  const navigate = useNavigate();
  const [category, setCategory] = useState();

  const readCategory = async () => {
    await axios
      .get(`/api/category`)
      .then((res) => {
        setCategory(res.data.categories);
      })
      .catch((err) => toast.error(err.response.data.msg));
  };

  useEffect(() => {
    readCategory();
  }, []);
  // logout handler
  const logouthandler = async () => {
    try {
      if (window.confirm(`Are you sure to logout ?`)) {
        await axios.get("/api/auth/logout").then((res) => {
          toast.success(res.data.msg);
          sessionStorage.removeItem("token");
          context.setIsLogin(false);
          context.setToken(false);
          context.setUser(false);
          navigate("/");
        });
      } else {
        toast.warning("logout terminated");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
      <div className="container">
        <NavLink to={"/"} className="navbar-brand">
          Foody
        </NavLink>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="menu"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to={"/"}
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Collections
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to={`/collection/all`} className="dropdown-item">
                    All
                  </NavLink>
                </li>
                {category?.map((item) => {
                  return (
                    <li key={item?._id}>
                      <NavLink
                        to={`/collection/${item.title}`}
                        className="dropdown-item"
                      >
                        {" "}
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          {context.isLogin && context.token ? (
            <ul className="navbar-nav">
              {context?.user.role === "user" ? (
                <li className="nav-item">
                  <NavLink to={`/cart`} className="nav-link">
                    <i className="bi bi-cart"></i>
                  </NavLink>
                </li>
              ) : null}
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Account <i className="bi bi-person-circle"></i>
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={`/${context?.user.role}/dashboard`}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  {context?.user.role === "user" ? (
                    <li>
                      <NavLink className="dropdown-item" to={`/user/profile`}>
                        Profile
                      </NavLink>
                    </li>
                  ) : (
                    <>
                      <li>
                        <NavLink to={`/category`} className={`dropdown-item`}>
                          Categories
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`/products`} className={`dropdown-item`}>
                          Products
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={`/logout`}
                  onClick={logouthandler}
                >
                  LogOut <i className="bi bi-box-arrow-right"></i>
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={`/login`} className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/register`} className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/cart`} className="nav-link">
                  <i className="bi bi-cart"></i>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
