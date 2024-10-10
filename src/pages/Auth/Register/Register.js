import React, { useState } from "react";
import "./register.scss";
import Layout from "../../../components/Layout/Layout";
import register from "../../../assets/images/Mobile login-rafiki.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
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
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      answer: data.answer,
    };
    // addEntry(newFormData);
    setData(newFormData);

    setData({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      answer: "",
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address,
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
  //   console.log(process.env.REACT_APP_API);
  //   console.log(data.name);
  //   console.log(data.email);
  //   console.log(data.password);
  //   console.log(data.phone);
  //   console.log(data.address);
  return (
    <Layout title={"Register Page"}>
      <div className="row register ">
        <div className="col-md-6 ">
          <img src={register} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-primary p-2 text-white text-center">
            REGISTER PAGE
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>
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
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Phone"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                value={data.address}
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
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          {/* <h1>{data.name}</h1> */}
        </div>
      </div>
    </Layout>
  );
};

export default Register;
