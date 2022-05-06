import {gql, useQuery } from '@apollo/client';
import { IPeopleResults, People } from '../types/types';

const GET_PEOPLE = gql`
    query fetchPeople($page: String!){
        page_people(page: $page){
          results{
              name
              height
              mass
              homeworld
           }
        }
    }
`;

export const useGetPeople = (page: string): IPeopleResults =>{
    const {error, loading, data} = useQuery(GET_PEOPLE, { variables: { page }})
    // console.log(data, loading, error);
    // console.log("Running in hook");
    return {loading, data}
}

