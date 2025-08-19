import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";
import store from "./store"; // à créer

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);