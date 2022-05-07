import {gql, useQuery } from '@apollo/client';
import { IPeopleResults } from '../types/types';

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
    const {loading, data} = useQuery(GET_PEOPLE, { variables: { page }})
    return {loading, data}
}

