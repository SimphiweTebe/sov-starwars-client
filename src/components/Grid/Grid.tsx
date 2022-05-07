import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
    position: relative;
    margin: 0 auto 40px;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

type Props = {
    children: React.ReactNode;
};

function Grid({ children }: Props){
  return (
    <StyledGrid>{ children }</StyledGrid>
  )
}

export default Grid