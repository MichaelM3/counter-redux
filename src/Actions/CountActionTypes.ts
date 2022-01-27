export const ADD_COUNT = "ADD_COUNT"

export interface IAddCount {
    type: typeof ADD_COUNT;
    payload: number
}

export type CountDispatchTypes = IAddCount