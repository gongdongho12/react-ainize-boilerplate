import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";

import {
  RecoilRoot
} from "recoil";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
