import "./Register.css";
import React from "react";
import * as Actions from "../Action/ActionView";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const viewsState = useSelector((state) => state.ReducerView);

  return (
    <div className="register">
      <div>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => dispatch(Actions.handleUserNameText(e.target.value))}
          value={viewsState.userNameText}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => dispatch(Actions.handlePassWordText(e.target.value))}
          value={viewsState.passwordText}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => dispatch(Actions.handleAgeText(e.target.value))}
          value={viewsState.ageText}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Place"
          onChange={(e) => dispatch(Actions.handlePlaceText(e.target.value))}
          value={viewsState.placeText}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Mobile Number"
          onChange={(e) => dispatch(Actions.handleMobNum(e.target.value))}
          value={viewsState.mobNumText}
        />
      </div>
      <button
        className="register-btn"
        onClick={() =>
          dispatch(
            Actions.submitRegister(
              viewsState.userNameText,
              viewsState.passwordText,
              viewsState.ageText,
              viewsState.placeText,
              viewsState.mobNumText
            )
          )
        }
        disabled={
          viewsState.userNameText === "" ||
          viewsState.passwordText === "" ||
          viewsState.ageText === "" ||
          viewsState.placeText === "" ||
          viewsState.mobNumText === ""
        }
      >
        Submit
      </button>
      <button
        className="register-btn"
        onClick={() => dispatch(Actions.cancelRegister())}
      >
        Cancel
      </button>
      {/* {viewsState.showError ? (
        <div>{viewsState.RegisterErrorMessage}</div>
      ) : (
        <div />
      )} */}
    </div>
  );
};

export default Register;
