import "./App.css";
import React from "react";
import View from "./View/View";
import { Provider } from "react-redux";
import Store from "./Store";

const App = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <div>
          <View />
        </div>
      </div>
    </Provider>
  );
};

export default App;
