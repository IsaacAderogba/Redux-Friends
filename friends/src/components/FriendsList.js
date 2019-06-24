import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  const { friends } = props;
  return (
    <div className={"ui card fluid"}>
      <h1>FriendsList</h1>
      {friends.friends.map(friend => {
        return (
          <Friend 
            key={friend.id}
            id={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
