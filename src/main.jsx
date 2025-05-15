import React from "react";
import reactDOM from "react-dom/client"
import "./App.css"
import App from "./App.jsx"

const root = reactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)