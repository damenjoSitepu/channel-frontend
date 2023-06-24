import { createAction, props } from "@ngrx/store";
import { LoginCrucialData } from "../login.interface";

export const LOGIN_START = '[Login Page] - Login Start';
export const LOGIN_SUCCESS = '[Login Page] - Login Success';
export const LOGIN_AUTO = '[Login Page] - Auto Login System';
export const LOGIN_FAIL = '[Login Page] - Login Fail';
export const LOGOUT_AUTO = '[Logout Page] - Auto Logout System';

export const loginStart = createAction(
    LOGIN_START,
    props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
    LOGIN_SUCCESS,
    props<LoginCrucialData>()
);

export const loginFail = createAction(
    LOGIN_FAIL
);

export const loginAuto = createAction(
    LOGIN_AUTO
);

export const logoutAuto = createAction(
    LOGOUT_AUTO
);