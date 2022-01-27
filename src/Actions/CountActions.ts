import { Dispatch } from "react";
import { ADD_COUNT, CountDispatchTypes } from "../Actions/CountActionTypes";

export const IncrementCount = (num: number) => (dispatch: Dispatch<CountDispatchTypes>) => {
    dispatch({
        type: ADD_COUNT,
        payload: num
    })
}
