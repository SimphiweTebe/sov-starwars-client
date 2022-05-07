import usePeopleData from '../../state/PeopleContext'
import { ReducerActionType } from '../../types/types';
import styled from "styled-components";

const StyledPagination = styled.div`
  postion: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px 10px;
  height: 80px;
  width: 100%;
  margin: 60px 0;

  button{
    padding: 10px 15px;
    background: #fff;
    cursor: pointer;
    border-radius: 50%;
  }
`;

type Props = {
  page: string
}

function Pagination({ page }: Props) {
    
  const { dispatch } = usePeopleData();

  const changePage = (page: string) => {
    const selectedPage = `page=${page}`    
    dispatch({ type: ReducerActionType.CHANGE_PAGE, payload: selectedPage })
  }

  const Buttons = [
    { id: "1"},
    { id: "2"},
    { id: "3"},
    { id: "4"},
    { id: "5"},
    { id: "6"},
    { id: "7"},
    { id: "8"},
    { id: "9"},
  ].map((button, i) => (
    <button key={button.id} onClick={(e)=> changePage(e.currentTarget.id)} id={button.id}>{button.id}</button>
  ))  
  
  return (
    <StyledPagination>
        { Buttons }
    </StyledPagination>
  )
}

export default Pagination