import React from "react";
import Friend from "./Friend";

const FriendsList = (props) => {
    const { friends } = props;
    console.log(friends);
  return (
    <div>
      <h1>FriendsList</h1>
    </div>
  );
};

export default FriendsList;
