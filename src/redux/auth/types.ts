export interface Auth {
    username: string;
    password: string;
}

export enum AuthActionTypes {
    LOGIN_REQUEST = "@@auth/LOGIN_REQUEST",
    LOGIN_SUCCESS = "@@auth/LOGIN_SUCCESS",
    LOGIN_FAIL = "@@auth/LOGIN_FAIL",
    LOGOUT = "@@auth/LOGOUT",
}

export interface AuthState {
    readonly loading: boolean;
    readonly data: Auth[];
    readonly error?: string;
}
