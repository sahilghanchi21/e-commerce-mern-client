import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { Badge } from "antd";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/Cart";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <>
        <div className="header-container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
              <div className="logo-container">
                <h1>
                  <Link to="/" className="navbar-brand">
                    🛒 Ecommerce App
                  </Link>
                </h1>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
                style={{ paddingRight: "30px" }}
              >
                {/* <div className="routes-container"> */}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <SearchInput />
                  <li className="nav-item">
                    <Link to="/" className="nav-link ">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={"/categories"}
                      data-bs-toggle="dropdown"
                    >
                      Categories
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to={"/categories"}>
                          All Categories
                        </Link>
                      </li>
                      {categories?.map((c) => (
                        <li>
                          <Link
                            className="dropdown-item"
                            to={`/category/${c.slug}`}
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {!auth?.user ? (
                    <>
                      <li className="nav-item">
                        <Link to="/register" className="nav-link">
                          Register
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          Login
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          style={{ border: "none" }}
                        >
                          {auth?.user?.name}
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={`/dashboard/${
                                auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                              className="dropdown-item"
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={handleLogout}
                              to="/login"
                              className="dropdown-item"
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                      <Badge count={cart?.length} showZero offset={[10, -5]}>
                        Cart
                      </Badge>
                    </Link>
                  </li>
                </ul>
                {/* </div> */}
              </div>
            </div>
          </nav>
        </div>
      </>
    </>
  );
};

export default Header;
