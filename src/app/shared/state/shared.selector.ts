import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, state => {
    return state.isLoading;
});

export const getErrorMessage = createSelector(getSharedState, state => {
    return state.errorMessage;
});

export const getSuccessMessage = createSelector(getSharedState, state => {
    return state.successMessage;
})

export const getIsLoggedIn = createSelector(getSharedState, state => {
    return state.isLoggedIn;
});

export const getUser = createSelector(getSharedState, state => {
    return state.user;
});

export const getTopLoading = createSelector(getSharedState, state => {
    return state.isTopLoading;
})