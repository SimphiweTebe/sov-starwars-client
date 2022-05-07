import styled from "styled-components";

const StyledLoader = styled.div`
  width: 100%
  heigth: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;

function Loader() {
  return (
    <StyledLoader>
      <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </StyledLoader>
  )
}

export default Loader