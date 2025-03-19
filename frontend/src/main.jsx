import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";  // 👈 Import TaskProvider
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
