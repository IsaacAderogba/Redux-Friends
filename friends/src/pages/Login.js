import React from "react";
import { connect } from 'react-redux';
import { login } from '../actions/index'

const Login = (props) => {
  let userRef = React.createRef();
  let passRef = React.createRef();

  const onLogin = () => {
    const username = userRef.current.value;
    const password = passRef.current.value;
    props.login(username, password);
  };

  return (
    <div>
      <h3>Login</h3>
      <div>
        username <input type="text" ref={userRef} />
      </div>
      <div>
        password <input type="text" ref={passRef} />
      </div>
      <button onClick={onLogin}>Log in</button>
    </div>
  );
};

export default connect(null, { login })(Login);
