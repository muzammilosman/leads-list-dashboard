import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/scss/styles.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import { Home } from "layouts/Home";
import { AuthProvider } from "context.js/AuthProvider";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/*" element={<Home />} />
        {/* <Redirect from="/" to="/admin/dashboard" /> */}
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
