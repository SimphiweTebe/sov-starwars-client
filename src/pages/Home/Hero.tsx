import styled from "styled-components";

const StyledHero = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 40vh;
    max-width: 600px;
    margin-bottom: 100px;

    @media screen and (max-width: 720px){
        height: 30vh;
    }
`;

function Hero() {
  return (
    <StyledHero>
        <h1 className="title__big">Explore<br/> the Galaxy</h1>
    </StyledHero>
  )
}

export default Hero