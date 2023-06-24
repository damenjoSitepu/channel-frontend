import { createAction, props } from "@ngrx/store";
import { LoginCrucialData } from "src/app/pages/auth/login/login.interface";

export const SET_LOADING = '[Shared State] - Set Loading';
export const SET_TOP_LOADING = '[Shared State] - Set Top Loading';
export const SET_ERROR_MESSAGE = '[Shared State] - Set Error Message';
export const SET_SUCCESS_MESSAGE = '[Shared State] - Set Success Message';
export const SET_IS_LOGGED_IN = '[Shared State] - Set Is Logged In Or Not';
export const SET_USER = '[Shared State] - Set User';

export const setLoading = createAction(
    SET_LOADING,
    props<{ isLoading: boolean }>()
);

export const setTopLoading = createAction(
    SET_TOP_LOADING,
    props<{ isLoading: boolean }>()
);

export const setErrorMessage = createAction(
    SET_ERROR_MESSAGE,
    props<{ errorMessage: string }>()
);

export const setSuccessMessage = createAction(
    SET_SUCCESS_MESSAGE,
    props<{ successMessage: string }>()  
);

export const setIsLoggedIn = createAction(
    SET_IS_LOGGED_IN,
    props<{ isLoggedIn: boolean }>()
);

export const setUser = createAction(
    SET_USER,
    props<{ user: LoginCrucialData | null }>()
);
