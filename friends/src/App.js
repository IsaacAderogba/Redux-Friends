import React from "react";
import { Route, Redirect } from "react-router-dom";
import ProtectedHomeRoute from "./pages/Home/ProtectedHomeRoute";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProtectedHomeRoute />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
