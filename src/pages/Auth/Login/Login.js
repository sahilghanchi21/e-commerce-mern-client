import React, { useState } from "react";
import "./login.scss";
import Layout from "../../../components/Layout/Layout";
import login from "../../../assets/images/Login-rafiki.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((e) => ({
      ...e,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFormData = {
      email: data.email,
      password: data.password,
    };
    // addEntry(newFormData);
    setData(newFormData);

    setData({
      email: "",
      password: "",
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email: data.email,
          password: data.password,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.error.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };
  return (
    <Layout title={"Login Page"}>
      <div className="row login ">
        <div className="col-md-6 ">
          <img src={login} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-primary p-2 text-white text-center">LOGIN PAGE</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2">
              {/* <div className="mb-3"> */}
              {/* </div> */}

              {/* <div className="mb-3"> */}
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password
              </button>
              {/* </div> */}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
