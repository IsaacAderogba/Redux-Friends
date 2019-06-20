import React from "react";
import { connect } from "react-redux";
import { postFriend } from "../actions/index";

const GetFriend = props => {
  let idRef = React.createRef();


  const onGetFriend = event => {
    event.preventDefault();
    const id = idRef.current.value;

    // props.postFriend(name, age, email);
  };

  return (
    <form onSubmit={onGetFriend}>
      <h3>Get Friend</h3>
      <div>
        id <input type="text" ref={idRef} />
      </div>
      <button>Get Friend</button>
    </form>
  );
};

export default connect(
  null,
  { postFriend }
)(GetFriend);
