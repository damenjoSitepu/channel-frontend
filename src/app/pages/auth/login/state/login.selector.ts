import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.state";

export const LOGIN_STATE_NAME = 'login';

const getLoginState = createFeatureSelector<LoginState>(LOGIN_STATE_NAME);

export const getUser = createSelector(getLoginState, (state) => {
    return state?.user;
});