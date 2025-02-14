import React from "react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>User Panel</h4>
          <Link
            to="/dashboard/user/user-profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </Link>
          <Link
            to="/dashboard/user/user-orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
