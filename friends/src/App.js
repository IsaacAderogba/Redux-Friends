import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={routeProps => {
          if (localStorage.getItem('token')) {
            return <Home />;
          }
          return <Redirect to="/login" />;
        }}
      />
      
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
