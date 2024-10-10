import React from "react";
import { useAuth } from "../../../context/auth";
import Layout from "../../../components/Layout/Layout";
import UserMenu from "../../../components/UserMenu/UserMenu";
const Dashboard = () => {
  const [auth] = useAuth();
  console.log(auth?.user?.name, "auth?.user?.name");
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>User name : {auth?.user?.name}</h3>
              <h3> User email : {auth?.user?.email}</h3>
              <h3> User address : {auth?.user?.address}</h3>
              <h3> User contact : {auth?.user?.contact}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
