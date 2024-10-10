import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./appRoutes";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";
import Policy from "../pages/Policy/Policy";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import Dashboard from "../pages/user/Dashboard/UserDashboard";
import PrivateRoute from "../components/PrivateRoutes/PrivateRoutes";
import ForgotPassword from "../pages/Auth/ForfotPassword/ForgotPassword";
import AdminRoutes from "../components/PrivateRoutes/AdminRoutes";
import AdminDashboard from "../pages/admin/Dashboard/AdminDashboard";
import CreateCategory from "../pages/admin/CreateCategory/CreateCategory";
import CreateProducts from "../pages/admin/CreateProducts/CreateProducts";
import Users from "../pages/admin/Users/Users";
import UserProfile from "../pages/user/UserProfile/UserProfile";
import UserOrders from "../pages/user/UserOrders/UserOrders";
import Products from "../pages/admin/Products/Products";
import UpdateProduct from "../pages/admin/UpdateProduct/UpdateProduct";
import Search from "../pages/Search/Search";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Categories from "../pages/Categories/Categories";
import CategoryProduct from "../pages/CtegoryProduct/CtegoryProduct";
import CartPage from "../pages/Cart/CartPage";
import AdminOrders from "../pages/admin/AdminOrders/AdminOrders";
const CustomRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoutes.BASE_URL} element={<Home />} />
      <Route path={AppRoutes.HOME} element={<Home />} />
      <Route path={AppRoutes.SEARCH} element={<Search />} />
      <Route path={AppRoutes.CTEGORIES} element={<Categories />} />
      <Route path={AppRoutes.CART} element={<CartPage />} />
      <Route path="/category/:slug" element={<CategoryProduct />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/user-profile" element={<UserProfile />} />
        <Route path="user/user-orders" element={<UserOrders />} />
      </Route>
      <Route path="/dashboard" element={<AdminRoutes />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/create-product" element={<CreateProducts />} />
        <Route path="admin/product/:slug" element={<UpdateProduct />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/admin-orders" element={<AdminOrders />} />
      </Route>
      <Route path={AppRoutes.ABOUT} element={<About />} />
      <Route path={AppRoutes.CONTACT} element={<ContactUs />} />
      <Route path={AppRoutes.POLICY} element={<Policy />} />
      <Route path={AppRoutes.PNF} element={<PageNotFound />} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.FORGOTPASSWORD} element={<ForgotPassword />} />
    </Routes>
  );
};

export default CustomRoutes;
