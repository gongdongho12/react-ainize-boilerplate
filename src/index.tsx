import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.less";
import App from "./App";

import {
  RecoilRoot
} from "recoil";

import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
