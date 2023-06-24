import { createAction, props } from "@ngrx/store";

/**
 * Home navbar - get active route action
 */
export const HOME_NAV_ACTIVE_ROUTE_START = '[Home Navbar] - Prepare To Get Active Route';

/**
 * Home navbar - successfully get active route action
 */
export const HOME_NAV_ACTIVE_ROUTE_SUCCESS = '[Home Navbar] - Successfully Get Active Route'

export const homeNavActiveRouteStart = createAction(
    HOME_NAV_ACTIVE_ROUTE_START,
    props<{activeRouteName: string}>()
);

export const homeNavActionRouteSuccess = createAction(
    HOME_NAV_ACTIVE_ROUTE_SUCCESS
);

