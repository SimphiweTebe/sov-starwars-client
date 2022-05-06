import React, { createContext, useReducer, useContext, useEffect } from "react";
import peopleReducer, { initialState } from "./peopleReducer";
import { useGetPeople } from "../hooks/useGetPeople";
import { ReducerActionType } from '../types/types';

type PeopleProviderProps = {
    children: React.ReactNode
}

const PeopleContext = createContext(initialState);

export const PeopleProvider = ({ children } : PeopleProviderProps) => {

    const [state, dispatch] = useReducer(peopleReducer, initialState);
    const { data, loading } = useGetPeople(state.currentPageNum)

    useEffect(()=>{
        if(loading) dispatch({ type: ReducerActionType.IS_LOADING, payload: true })
        if(data){
            dispatch({ type: ReducerActionType.GET_PEOPLE, payload: data?.page_people?.results })
            dispatch({ type: ReducerActionType.IS_LOADING, payload: false })
        }

    },[data, loading ]) 

    const paginate = (page: string) => {
        const pageNum = `page=${page}`;
        dispatch({
            type: ReducerActionType.CHANGE_PAGE,
            payload: pageNum
        })
    }
    
    const value = {
        currentPeople: state.currentPeople,
        currentPageNum: state.currentPageNum,
        isLoading: state.isLoading,
        paginate
    }

    return <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
}

const usePeopleData = () => {

    const context = useContext(PeopleContext)

    if(context === undefined){
        throw new Error("usePeopleData must be used within PeopleContext")
    }
    return context;
}

export default usePeopleData;