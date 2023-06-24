import { createReducer } from "@ngrx/store";
import { registerInitialState } from "./register.state";

const _registerReducer = createReducer(registerInitialState);

export function RegisterReducer(state: any, action: any) {
    return _registerReducer(state, action);
}