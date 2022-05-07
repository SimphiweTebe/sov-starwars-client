
export interface initialStateType {
    currentPeople: Person[]
    currentPageNum: string
    isLoading: boolean,
}

export type Person = {
    name: string
    height: string
    mass: string
    gender: string
    homeworld: string
}

export type People = {
    data: Person[]
    loading: boolean
}

export interface IPeople {
    count: number;
    next: string;
    previous: string;
    results: Person[];
}

export interface IPeopleResults {
    loading: boolean;
    data: { page_people: IPeople }
}

//PEOPLE REDUCER TYPES

export enum ReducerActionType {
    GET_PEOPLE,
    CHANGE_PAGE,
    IS_LOADING
}

export type LoadingSatus = {
    type: ReducerActionType.IS_LOADING
    payload: boolean
}

export type ChangePage = {
    type: ReducerActionType.CHANGE_PAGE
    payload: string
}

export type GetPeople = {
    type: ReducerActionType.GET_PEOPLE
    payload: Person[]
}

export type ReducerAction = LoadingSatus | ChangePage | GetPeople;

