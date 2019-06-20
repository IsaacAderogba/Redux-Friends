import React from "react";
import { connect } from "react-redux";
import { updateFriend } from "../actions/index";

const UpdateFriend = props => {
  let nameRef = React.createRef();
  let ageRef = React.createRef();
  let emailRef = React.createRef();

  const onAddFriend = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const email = emailRef.current.value;
    props.updateFriend(props.friend.id, name, age, email);
  };

  return (
    <form className="ui form text container" onSubmit={onAddFriend}>
      <h3>Update Friend</h3>
      <div>
        name{" "}
        <input
          placeholder={props.friend ? props.friend.name : "name"}
          type="text"
          ref={nameRef}
        />
      </div>
      <div>
        age{" "}
        <input
          placeholder={props.friend ? props.friend.age : "age"}
          type="text"
          ref={ageRef}
        />
      </div>
      <div>
        email{" "}
        <input
          placeholder={props.friend ? props.friend.email : "email"}
          type="text"
          ref={emailRef}
        />
      </div>
      <br />
      <button className="ui button">Update Friend</button>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    friend: state.friends.selectedFriend
  };
}

export default connect(
  mapStateToProps,
  { updateFriend }
)(UpdateFriend);
