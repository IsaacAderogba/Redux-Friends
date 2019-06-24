import React from "react";
import AddFriend from "./AddFriend";
import GetFriend from "./GetFriend";
import UpdateFriend from "./UpdateFriend";

const FriendsForms = props => {
  return (
    <div className={"ui card fluid"}>
      <h1>FriendsForms</h1>
      <AddFriend />
      <GetFriend />
      <UpdateFriend />
    </div>
  );
};

export default FriendsForms;
