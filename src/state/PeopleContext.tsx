import React, { createContext, useReducer, useContext, useEffect} from "react";
import peopleReducer, { initialState } from "./peopleReducer";
import { useGetPeople } from "../hooks/useGetPeople";
import { initialStateType, ReducerAction, ReducerActionType } from '../types/types';

type PeopleProviderProps = {
    children: React.ReactNode
}
const PeopleContext = createContext<{ state: initialStateType; dispatch: React.Dispatch<ReducerAction>; }>({
    state: initialState,
    dispatch: () => null
  });

export const PeopleProvider: React.FC<PeopleProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(peopleReducer, initialState);
    const { data, loading } = useGetPeople(state.currentPageNum)

    useEffect(()=>{
        if(loading) dispatch({ type: ReducerActionType.IS_LOADING, payload: true })
        if(data){
            dispatch({ type: ReducerActionType.GET_PEOPLE, payload: data?.page_people?.results })
            dispatch({ type: ReducerActionType.IS_LOADING, payload: false })
        }

    },[data, loading ]) 

    return <PeopleContext.Provider value={{state, dispatch}}>{children}</PeopleContext.Provider>
}

const usePeopleData = () => {

    const context = useContext(PeopleContext)

    if(context === undefined){
        throw new Error("usePeopleData must be used within PeopleContext")
    }
    return context;
}

export default usePeopleData;