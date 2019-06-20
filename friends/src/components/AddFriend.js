import React from "react";
import { connect } from "react-redux";
import { postFriend } from "../actions/index";

const Login = props => {
  let nameRef = React.createRef();
  let ageRef = React.createRef();
  let emailRef = React.createRef();

  const onAddFriend = () => {
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const email = emailRef.current.value;

    props.postFriend();
  };

  return (
    <form onSubmit={onAddFriend}>
      <h3>Add Friend</h3>
      <div>
        name <input type="text" ref={nameRef} />
      </div>
      <div>
        age <input type="text" ref={ageRef} />
      </div>
      <div>
        email <input type="text" ref={ageRef} />
      </div>
      <button>Add Friend</button>
    </form>
  );
};

export default connect(
  null,
  { postFriend }
)(Login);
