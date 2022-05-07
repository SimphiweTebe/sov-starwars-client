import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
    position: relative;
    min-height: 20vh;
    width: 100%;
    margin: 0 auto 40px;

    @media screen and (min-width: 600px){
      display: grid;
      gap: 15px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
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