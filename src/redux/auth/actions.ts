import axios from "axios";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "../store";
import { AuthActionTypes } from "./types";

export type AppThunk = ActionCreator<
    ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const login: AppThunk = (username, password) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: AuthActionTypes.LOGIN_REQUEST,
            });

            const { data } = await axios.post(`https://httpbin.org/post`, {
                username,
                password,
            });

            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
                payload: data,
            });

            localStorage.setItem("userLogin", JSON.stringify(data.json));
        } catch (error: any) {
            dispatch({
                type: AuthActionTypes.LOGIN_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
};

export const logout: AppThunk = () => {
    return (dispatch: Dispatch) => {
        localStorage.removeItem("userLogin");

        dispatch({ type: AuthActionTypes.LOGOUT });

        document.location.href = "/login";
    };
};
