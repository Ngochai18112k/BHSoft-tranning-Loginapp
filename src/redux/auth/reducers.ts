import { Reducer } from "redux";
import { AuthActionTypes, AuthState } from "./types";

export const initialState: AuthState = {
    data: [],
    error: undefined,
    loading: false,
};

export const authReducer: Reducer<AuthState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST: {
            return { ...state, loading: true };
        }
        case AuthActionTypes.LOGIN_SUCCESS: {
            return { ...state, loading: false, data: action.payload };
        }
        case AuthActionTypes.LOGIN_FAIL: {
            return { ...state, loading: false, error: action.payload };
        }
        case AuthActionTypes.LOGOUT: {
            return { ...state };
        }
        default: {
            return state;
        }
    }
};
