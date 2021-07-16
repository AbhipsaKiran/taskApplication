import * as Types from "../Type/Type";
export const handleLogIn = (userName, passWord) => {
  return {
    type: Types.HANDLE_LOGIN,
    userName: userName,
    passWord: passWord,
  };
};
export const handleUserNameText = (userName) => {
  return {
    type: Types.HANDLE_USER_NAME_TEXT,
    userName: userName,
  };
};
export const handlePassWordText = (passWord) => {
  return {
    type: Types.HANDLE_PASSWORD_TEXT,
    passWord: passWord,
  };
};
export const getDashboardData = () => {
  return {
    type: Types.GET_DASHBOARD_DATA,
  };
};
export const handleAgeText = (age) => {
  return {
    type: Types.HANDLE_AGE,
    age,
  };
};
export const handlePlaceText = (place) => {
  return {
    type: Types.HANDLE_PLACE,
    place,
  };
};
export const handleMobNum = (mobNum) => {
  return {
    type: Types.HANDLE_MOB_NUM,
    mobNum,
  };
};
export const handleRegister = () => {
  return {
    type: Types.HANDLE_REGISTER,
  };
};
export const submitRegister = (userName, passWord, age, place, mobNum) => {
  return {
    type: Types.SUBMIT_REGISTER,
    userName,
    passWord,
    age,
    place,
    mobNum,
  };
};
export const cancelRegister = () => {
  return {
    type: Types.CANCEL_RESGISTER,
  };
};
