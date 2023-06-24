import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { registerStart, registerSuccess } from "./register.actions";
import { catchError, exhaustMap, finalize, map, of, tap } from "rxjs";
import { RegisterService } from "../register.service";
import { Store } from "@ngrx/store";
import { setErrorMessage, setLoading, setSuccessMessage } from "src/app/shared/state/shared.actions";
import { RedirectAnimationService } from "src/app/services/redirect-animation.service";
import { ValidationEffectAnimationService } from "src/app/services/validation-effect-animation.service";

@Injectable()
export class RegisterEffects {
    public constructor(
        private _actions$: Actions,
        private _registerService: RegisterService,
        private _store: Store,
        private _redirectAnimationService: RedirectAnimationService,
        private _validationEffectAnimationService: ValidationEffectAnimationService
    ) { }
    
    /**
     * Register Functionality
     */
    public register$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(registerStart),
            exhaustMap((action) => {
                this._store.dispatch(setLoading({ isLoading: true }));
                return this._registerService.create(action)
                    .pipe(
                        map((res) => {
                            if (res.isError) throw { error: { message: res.message } };
                            return registerSuccess({ message: res.message });
                        }), 
                        catchError((res) => {
                            this._validationEffectAnimationService.displayErrorAnimation(
                                'channel__register'
                            );
                            return of(setErrorMessage({ errorMessage: res.error.message }));
                        }),
                        finalize(() => {
                            this._store.dispatch(setLoading({ isLoading: false }));
                        })
                    );
            })
        )
    });

    /**
     * Redirect after register success
     */
    public registerRedirect$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(registerSuccess),
            tap((action) => {
                this._store.dispatch(setSuccessMessage({ successMessage: action.message }));
                this._redirectAnimationService.backTo(
                    ['auth', 'login'],
                    'channel__register_wrapper',
                    'channel__registration_disappear'
                );
            })
        )
    }, {
        dispatch: false
    })
}