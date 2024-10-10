import React, { useState } from "react";
import "./forgotPassword.scss";
import Layout from "../../../components/Layout/Layout";

import forgot from "../../../assets/images/Forgot password-rafiki.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    answer: "",
  });
  const navigate = useNavigate();

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
      answer: data.answer,
    };
    // addEntry(newFormData);
    setData(newFormData);

    setData({
      email: "",
      password: "",
      answer: "",
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        {
          email: data.email,
          password: data.password,
          answer: data.answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.error.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };
  return (
    <Layout title={"Reset Page"}>
      <div className="row register ">
        <div className="col-md-6 ">
          <img src={forgot} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-primary p-2 text-white text-center">RESET PAGE</h1>
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
                placeholder="New Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="What is Your Favorite sports"
                name="answer"
                value={data.answer}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
