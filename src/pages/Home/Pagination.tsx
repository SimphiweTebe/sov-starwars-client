import usePeopleData from '../../state/PeopleContext'
import { ReducerActionType } from '../../types/types';

function Pagination() {
    
  const { dispatch } = usePeopleData();

  const changePage = (page: string) => {
    const current = `page=${page}`    
    dispatch({ type: ReducerActionType.CHANGE_PAGE, payload: current })
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
    <div className="pagination">
        { Buttons }
    </div>
  )
}

export default Pagination