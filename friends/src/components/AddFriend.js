import React from "react";
import { connect } from "react-redux";
import { postFriend } from "../actions/index";

const AddFriend = props => {
  let nameRef = React.createRef();
  let ageRef = React.createRef();
  let emailRef = React.createRef();

  const onAddFriend = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const email = emailRef.current.value;
    props.postFriend(name, age, email);
  };

  return (
    <form className="ui form text container" onSubmit={onAddFriend}>
      <h3>Add Friend</h3>
      <div>
        name <input type="text" ref={nameRef} />
      </div>
      <div>
        age <input type="text" ref={ageRef} />
      </div>
      <div>
        email <input type="text" ref={emailRef} />
      </div>
      <br />
      <button className="ui button">Add Friend</button>
    </form>
  );
};

export default connect(
  null,
  { postFriend }
)(AddFriend);
