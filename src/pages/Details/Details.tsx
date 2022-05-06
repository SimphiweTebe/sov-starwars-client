import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useSearchPeople } from '../../hooks/useGetPerson';

function Details() {
    const { name } = useParams()
    const { data, loading } = useSearchPeople(name)
    
  return (
    <div>
        <h1>Details</h1>
        <Link to="/">Home</Link>
        {
            loading && <Loader />
        }
        {
            data && (
                <>
                    <h3>{data.search_people.name}</h3>
                    <h3>{data.search_people.gender}</h3>
                    <h3>{data.search_people.height}</h3>
                    <h3>{data.search_people.mass}</h3>
                    <h3>{data.search_people.homeworld}</h3>
                </>
            )
        }
    </div>
  )
}

export default Details