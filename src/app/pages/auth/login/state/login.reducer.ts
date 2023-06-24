import { createReducer, on } from "@ngrx/store";
import { loginInitialState } from "./login.state";
import { loginSuccess, logoutAuto } from "./login.actions";

const _loginReducer = createReducer(
    loginInitialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: {
                isLoggedIn: true,
                userCredential: action.userCredential,
                aboutToken: action.aboutToken
            }
        };
    }),
    on(logoutAuto, (state, action) => {
        return {
            ...state,
            user: null
        }
    })
);

export function LoginReducer(state: any, action: any) {
    return _loginReducer(state, action);
}