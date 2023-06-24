import { LoginCrucialData } from "src/app/pages/auth/login/login.interface";

export interface SharedState {
    activeMainSidebar: string;
    isLoading: boolean;
    isTopLoading: boolean;
    errorMessage: string;
    successMessage: string;
    isLoggedIn: boolean;
    user?: LoginCrucialData | null;
}

export const sharedInitialState: SharedState = {
    activeMainSidebar: 'home',
    isLoading: false,
    isTopLoading: false,
    errorMessage: '',
    successMessage: '',
    isLoggedIn: false,
    user: null
};