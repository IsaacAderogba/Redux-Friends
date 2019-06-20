import React from "react";
import { connect } from 'react-redux';
import { login } from '../actions/index'
import { withRouter } from "react-router-dom";

const Login = (props) => {
  let userRef = React.createRef();
  let passRef = React.createRef();

  const onLogin = () => {
    const username = userRef.current.value;
    const password = passRef.current.value;
    props.login(username, password);
  };

  if(localStorage.getItem('token')) {
    props.history.push("/");
  }
  return (
    <form onSubmit={onLogin}>
      <h3>Login</h3>
      <div>
        username <input type="text" ref={userRef} />
      </div>
      <div>
        password <input type="text" ref={passRef} />
      </div>
      <button>Log in</button>
    </form>
  );
};

export default connect(null, { login })(withRouter(Login));
