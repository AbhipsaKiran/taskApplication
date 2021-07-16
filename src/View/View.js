import "./View.css";
import React from "react";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Register from "../Register/Register";
import * as Actions from "../Action/ActionView";
import { useSelector, useDispatch } from "react-redux";

const View = () => {
  const dispatch = useDispatch();
  const viewsState = useSelector((state) => state.ReducerView);
  return (
    <div className="View">
      {!viewsState.showDashboard && !viewsState.showRegister ? (
        <Login />
      ) : viewsState.showDashboard ? (
        <Dashboard />
      ) : (
        <Register />
      )}
    </div>
  );
};

export default View;
