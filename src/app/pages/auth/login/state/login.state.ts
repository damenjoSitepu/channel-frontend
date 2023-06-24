import { LoginCrucialData } from "../login.interface";

export interface LoginState {
    user: LoginCrucialData | null;
}

export const loginInitialState: LoginState = {
    user: null
};