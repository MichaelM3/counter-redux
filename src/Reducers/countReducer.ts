import { ADD_COUNT } from "../Actions/CountActionTypes"

export interface ICountState {
    count: number;
}

const initialState: ICountState = {
    count: 0
}

const countReducer = (state: ICountState = initialState, action: any): ICountState => {
    switch (action.type) {
        case ADD_COUNT:
            return { ...state, count: action.payload }
        default:
            return state
    }
}

export default countReducer