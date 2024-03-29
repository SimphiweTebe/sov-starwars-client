import { ReducerActionType, initialStateType, ReducerAction} from '../types/types'

export const initialState = {
    currentPeople: [{
        name: "",
        height: "",
        mass: "",
        gender: "",
        homeworld: "",
    }],
    currentPageNum: "page=1",
    isLoading: false
}


const peopleReducer = (state: initialStateType, action: ReducerAction ) =>{

    switch(action.type){

        case ReducerActionType.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case ReducerActionType.GET_PEOPLE:  
            return {
                ...state,
                currentPeople: action.payload
            }

        case ReducerActionType.CHANGE_PAGE:
            return {
                ...state,
                currentPageNum: action.payload
            }

        default:
            throw new Error(`No case for this action type`)
    }
}

export default peopleReducer;