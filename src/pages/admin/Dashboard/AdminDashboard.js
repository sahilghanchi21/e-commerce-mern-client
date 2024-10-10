import React from "react";
import Layout from "../../../components/Layout/Layout";
import { useAuth } from "../../../context/auth";
import AdminMenu from "../../../components/AdminMenu/AdminMenu";

const AdminDashboard = () => {
  const [auth] = useAuth();
  console.log(auth?.user, "auth?.user");
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Address : {auth?.user?.address}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
