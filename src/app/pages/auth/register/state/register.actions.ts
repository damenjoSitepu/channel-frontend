import { createAction, props } from "@ngrx/store";
import { RegisterRequest } from "../register.interface";

export const REGISTER_START = '[Register Page] - Register Start';
export const REGISTER_FINISH = '[Register Page] - Register Finish';
export const REGISTER_FAIL = '[Register Page] - Register Failed';

export const registerStart = createAction(
    REGISTER_START,
    props<RegisterRequest>()
);

export const registerSuccess = createAction(
    REGISTER_FINISH,
    props<{ message: string }>()
);