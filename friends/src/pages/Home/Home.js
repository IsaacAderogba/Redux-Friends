import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/index";
import FriendsList from "../../components/FriendsList";

// export const GET_FRIENDS = "GET_FRIENDS";
// export const GET_FRIEND = "GET_FRIEND";
// export const POST_FRIEND = "POST_FRIEND";
// export const PUT_FRIEND = "PUT_FRIEND";
// export const DELETE_FRIEND = "DELETE_FRIEND";

const Home = props => {
  const { getFriends } = props;
  useEffect(() => {
    getFriends();
  }, [getFriends]);

  console.log(props);

  return (
    <div>
      <FriendsList />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    fetch: state.fetch,
    friends: state.friends
  };
}

export default connect(
  mapStateToProps,
  actions
)(Home);
