import React from "react";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/AdminMenu/AdminMenu";

const Users = () => {
  return (
    <Layout title={"Dashboard - All users page"}>
      <div className="container-fluid p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">All users</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
