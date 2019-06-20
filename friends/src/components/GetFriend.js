import React from "react";
import { connect } from "react-redux";
import { getFriend } from "../actions/index";

const GetFriend = props => {
  const { friend } = props;
  let idRef = React.createRef();

  const onGetFriend = event => {
    event.preventDefault();
    const id = idRef.current.value;
    props.getFriend(id);
  };

  return (
    <form onSubmit={onGetFriend}>
      <h3>Get Friend</h3>
      <div>
        id <input type="text" ref={idRef} />
      </div>
      <button>Get Friend</button>
      <p>{friend ? friend.name : ''}</p>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    friend: state.friends.friend
  };
}

export default connect(
  mapStateToProps,
  { getFriend }
)(GetFriend);
