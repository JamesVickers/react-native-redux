import React from 'react';
import styled from 'styled-components/native';

const StyledCard = styled.View`
  flex-grow: ${(props) => props.flexGrow};
  margin: 2.5% 0 2.5% 0;
  padding: 5%;
  border: solid 1px #f4511e;
`;

const Card = ({children, flexGrow = 0}) => {
  return <StyledCard flexGrow={flexGrow}>{children}</StyledCard>;
};

export default Card;
