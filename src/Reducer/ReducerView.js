export const initialState = {
  userNameText: "",
  passwordText: "",
  ageText: "",
  placeText: "",
  mobNumText: "",
  showDashboard: false,
  showRegister: false,
  loginErrorMessage: "",
  showError: false,
  isLoading: false,
  dashboardData: [],
};
export default function (state = { ...initialState }, action) {
  switch (action.type) {
    case "HANDLE_USER_NAME_TEXT":
      return {
        ...state,
        userNameText: action.userName,
      };
    case "HANDLE_PASSWORD_TEXT":
      return {
        ...state,
        passwordText: action.passWord,
      };
    case "HANDLE_LOGIN":
      let isValidationError = true;
      let errorMessage = "";
      let userData = localStorage.getItem("userdata");
      if (!userData) {
        isValidationError = true;
        errorMessage = "Invalid Login";
      } else {
        let modifiedUserData = JSON.parse(userData);
        modifiedUserData.map((item) => {
          if (
            item.userName === action.userName &&
            item.passWord === action.passWord
          ) {
            isValidationError = false;
          }
        });
        if (isValidationError) {
          errorMessage = "Invalid Login";
        }
      }
      return {
        ...state,
        showDashboard: isValidationError === true ? false : true,
        loginErrorMessage: isValidationError ? errorMessage : "",
        showError: isValidationError ? true : false,
      };
    case "GET_DASHBOARD_DATA":
      return {
        ...state,
        isLoading: true,
      };
    case "RECEIVED_DASHBOARD_DATA":
      return {
        ...state,
        isLoading: false,
        dashboardData: [...action.receivedData.user],
      };
    case "HANDLE_REGISTER":
      return {
        ...state,
        showRegister: true,
      };
    case "HANDLE_AGE":
      return {
        ...state,
        ageText: action.age,
      };
    case "HANDLE_PLACE":
      return {
        ...state,
        placeText: action.place,
      };
    case "HANDLE_MOB_NUM":
      return {
        ...state,
        mobNumText: action.mobNum,
      };
    case "CANCEL_RESGISTER":
      return {
        ...state,
        userNameText: "",
        passwordText: "",
        ageText: "",
        placeText: "",
        mobNumText: "",
        showRegister: false,
      };
    case "SUBMIT_REGISTER":
      return {
        ...state,
        isLoading: true,
      };
    case "ON_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "ON_FAIL":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
