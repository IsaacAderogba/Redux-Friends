import React from "react";

const Home = () => {
  let userRef = React.createRef();
  let passRef = React.createRef();

  const onLogin = () => {
    const username = userRef.current.value;
    const password = passRef.current.value;
    console.log(username, password)
    // call login action
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

export default Home;
