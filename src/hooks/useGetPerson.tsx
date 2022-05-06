import {gql, useQuery } from '@apollo/client';

const GET_PEOPLE = gql`
    query fetchPeople($name: String!){
        search_people(name: $name){
            name
            height
            gender
            mass
            homeworld
        }
    }
`;

export const useSearchPeople = (name: string | undefined) => {
    const {error, loading, data} = useQuery(GET_PEOPLE, { variables:{ name } })
    console.log(data);
    return { error, loading, data}
}

