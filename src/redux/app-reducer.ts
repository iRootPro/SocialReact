import {getAuthUserData} from "./auth-reducer";

const INITILIZED_SUCCESS = "INITILIZED_SUCCESS";

const initState = {
    initialized: false
}

export type StateInitType = {
    initialized: boolean
}

type ActionAuthType = ReturnType<typeof initializedSuccess>

export const appReducer = (state: StateInitType = initState, action: ActionAuthType) => {
    switch (action.type) {
        case INITILIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITILIZED_SUCCESS})


export const initializeApp = () => (dispatch:any) => {
    dispatch(getAuthUserData()).then(() => dispatch(initializedSuccess()))
}