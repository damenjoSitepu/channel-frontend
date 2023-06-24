import { createReducer, on } from "@ngrx/store";
import { sharedInitialState } from "./shared.state";
import { setErrorMessage, setIsLoggedIn, setLoading, setSuccessMessage, setTopLoading, setUser } from "./shared.actions";

const _sharedReducer = createReducer(
    sharedInitialState,
    on(setLoading, (state, action) => {
        return {
            ...state,
            isLoading: action.isLoading,
        };
    }),
    on(setTopLoading, (state, action) => {
        return {
            ...state,
            isTopLoading: action.isLoading
        };
    }),
    on(setErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMessage
        }
    }),
    on(setSuccessMessage, (state, action) => {
        return {
            ...state,
            successMessage: action.successMessage
        }
    }),
    on(setIsLoggedIn, (state, action) => {
        return {
            ...state,
            isLoggedIn: action.isLoggedIn
        }
    }),
    on(setUser, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    })
);

export function SharedReducer(state: any, action: any) {
    return _sharedReducer(state, action);
}