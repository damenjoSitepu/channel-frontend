import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeNavState } from "./home-nav.state";

export const HOME_NAV_STATE_NAME = 'Home Nav';

/**
 * Create Feature Selector
 */
const getHomeNavState = createFeatureSelector<HomeNavState>(HOME_NAV_STATE_NAME);

/**
 * Create Selector To Get Activate Route Name
 */
export const getActiveRouteName = createSelector(getHomeNavState, (state) => {
    return state.activeRouteName;
});