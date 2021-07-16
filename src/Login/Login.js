import "./Login.css";
import React from "react";
import * as Actions from "../Action/ActionView";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const viewsState = useSelector((state) => state.ReducerView);
  const handleUserNameChange = (e) => {
    dispatch(Actions.handleUserNameText(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(Actions.handlePassWordText(e.target.value));
  };
  const handleLogIn = () => {
    dispatch(
      Actions.handleLogIn(viewsState.userNameText, viewsState.passwordText)
    );
  };
  console.log("state check", viewsState);
  return (
    <div className="Login">
      <div>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => handleUserNameChange(e)}
          value={viewsState.userNameText}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => handlePasswordChange(e)}
          value={viewsState.passwordText}
        />
      </div>
      <button
        className="login-btn"
        onClick={() => handleLogIn()}
        disabled={
          viewsState.userNameText === "" || viewsState.passwordText === ""
        }
      >
        Log in
      </button>
      <button
        className="register-btn"
        onClick={() => dispatch(Actions.handleRegister())}
      >
        Register
      </button>
      {viewsState.showError ? (
        <div>{viewsState.loginErrorMessage}</div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Login;
