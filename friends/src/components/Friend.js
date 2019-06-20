import React from 'react';
import styled from 'styled-components';

const Friend = (props) => {
    const { name, age, email } = props;
    return (
        <StyledFriends>
        <span>{name}</span>
        <span>{age}</span>
        <span>{email}</span>
        </StyledFriends>
    )
}

const StyledFriends = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export default Friend;