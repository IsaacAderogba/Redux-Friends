import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteFriend } from "../actions/index";

const Friend = props => {
  const { name, age, email, id, deleteFriend } = props;

  return (
    <StyledFriends>
      <span>{id}</span>
      <span>{name}</span>
      <span>{age}</span>
      <span>{email}</span>
      <button onClick={() => deleteFriend(id)}>X</button>
    </StyledFriends>
  );
};

const StyledFriends = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default connect(
  null,
  { deleteFriend }
)(Friend);
