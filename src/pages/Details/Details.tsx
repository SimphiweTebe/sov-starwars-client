import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useSearchPeople } from '../../hooks/useGetPerson';
import styled from 'styled-components';

const StyledCharacter = styled.div`

    position: relative;
    min-height: 50vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0,0,0,.7);
    padding: 0 30px;
    margin-top: 80px;

    p{
        font-size: 1.6rem;
        margin-bottom: 20px;
    }

    .back{
        color: #000;
        background: #DBA90E;
        padding: 5px 15px;
        margin-top: 20px;
        font-weight: 500;
        letter-spacing: .3px;
    }

`;

function Details() {
    const { name } = useParams()
    const { data, loading } = useSearchPeople(name)
    
  return (
    <>
        {
            loading ? <Loader /> : (
                <StyledCharacter>
                    <div className="details">
                        <h1 className='title__med' style={{marginBottom: '30px', color: "#DBA90E"}}>{data?.search_people.name}</h1>
                        <p><strong>Gender: </strong> {data.search_people.gender}</p>
                        <p><strong>Height: </strong> {data.search_people?.height}</p>
                        <p><strong>Mass:</strong> {data.search_people?.mass}</p>
                        <p><strong>Homeworld:</strong> {data.search_people?.homeworld}</p>
                    </div>
                    <Link to="/" className='back'>Back</Link>
                </StyledCharacter>
            )
        }
    </>
  )
}

export default Details