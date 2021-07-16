import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";
function* getData(action) {
  try {
    const fetchedData = yield axios.get(
      "http://localhost:3000/Fixtures/testData.json"
    );
    yield put({
      type: "RECEIVED_DASHBOARD_DATA",
      receivedData: fetchedData.data,
    });
  } catch (e) {
    console.log("error", e);
  }
}
function* submitData(action) {
  try {
    const fetchedData = yield axios.get(
      "http://localhost:3000/Fixtures/submitData.json"
    );
    let userData = localStorage.getItem("userdata");
    if (userData) {
      let modifiedUserData = JSON.parse(userData);
      modifiedUserData.push({
        userName: action.userName,
        passWord: action.passWord,
        age: action.age,
        place: action.place,
        mobNum: action.mobNum,
      });
      localStorage.setItem("userdata", JSON.stringify(modifiedUserData));
    } else {
      localStorage.setItem(
        "userdata",
        JSON.stringify([
          {
            userName: action.userName,
            passWord: action.passWord,
            age: action.age,
            place: action.place,
            mobNum: action.mobNum,
          },
        ])
      );
    }
    yield put({
      type: "ON_SUCCESS",
    });
    yield put({
      type: "CANCEL_RESGISTER",
    });
  } catch (e) {
    console.log("error", e);
    yield put({
      type: "ON_FAIL",
    });
  }
}
export default function* actionWatcherView() {
  yield takeEvery("GET_DASHBOARD_DATA", getData);
  yield takeEvery("SUBMIT_REGISTER", submitData);
}
