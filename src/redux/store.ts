import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducers";
import { AuthState } from "./auth/types";

export interface ApplicationState {
    auth: AuthState;
}

const createRootReducer = () => combineReducers({ auth: authReducer });

export default function configureStore(
    initialState: ApplicationState
): Store<ApplicationState> {
    const store = createStore(
        createRootReducer(),
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}
