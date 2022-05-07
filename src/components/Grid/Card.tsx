import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  letter-spacing: .5px;
  margin-bottom: 20px;

  .card__link{
    position: relative;
    display: inline-block;
    padding: 10px 30px;
    background-color: #DBA90E;
    color: #fff;
    border-radius: 40px;
    font-size: 1.3rem;
    letter-spacing: .5px;
    text-align: center;
    max-width: 200px;
    font-weight: 500;
    margin-top: 20px;
  }
`;

type Props = {
  character: {
    height: string
    mass: string
    name: string
  }
}

function Card({ character } : Props) {

    return (
      <StyledCard>
          <h3>{character.name}</h3>
          <p>Mass: {character.mass}</p>
          <p>Height: {character.height}</p>
          <Link className="card__link" to={`details/${character.name}`}>Read more</Link>
      </StyledCard>
    )
}

export default Card