import { createReducer, on } from "@ngrx/store";
import { homeNavInitialState } from "./home-nav.state";
import { homeNavActiveRouteStart } from "./home-nav.action";

/**
 * Create Reducer
 */
const _homeNavReducer = createReducer(
    homeNavInitialState,
    on(homeNavActiveRouteStart, (state, action) => {
        return {
            ...state,
            activeRouteName: action.activeRouteName
        };
    })
);

/**
 * Home Nav Pure Function For Reducer
 * 
 * @param state 
 * @param action 
 * @returns 
 */
export function HomeNavReducer(state: any, action: any) {
    return _homeNavReducer(state, action);
}