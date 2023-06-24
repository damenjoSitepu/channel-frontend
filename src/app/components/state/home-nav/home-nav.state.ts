/**
 * Home Nav State Interface
 */
export interface HomeNavState {
    activeRouteName: string;
};

/**
 * Home Nav Initial State
 */
export const homeNavInitialState: HomeNavState = {
    activeRouteName: '/'
};