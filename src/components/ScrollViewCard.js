import React from 'react';
import styled from 'styled-components/native';

const StyledScrollViewCard = styled.ScrollView`
  flex-grow: ${(props) => props.flexGrow};
  margin: 2.5% 0 2.5% 0;
  padding: 5%;
  border: solid 1px #f4511e;
`;

const ScrollViewCard = ({children, flexGrow = 0}) => {
  return (
    <StyledScrollViewCard flexGrow={flexGrow}>{children}</StyledScrollViewCard>
  );
};

export default ScrollViewCard;
