import * as React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./components/Schedule/App";
import "./index.css";
import "./components/Schedule/App.css";
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('YOUR_LICENSE_KEY');

const root = createRoot(document.getElementById("content-area") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
