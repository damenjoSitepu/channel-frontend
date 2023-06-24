import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { LoginService } from "../login.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginAuto, loginFail, loginStart, loginSuccess, logoutAuto } from "./login.actions";
import { catchError, exhaustMap, finalize, map, mergeMap, of, tap } from "rxjs";
import { Router } from "@angular/router";
import { setErrorMessage, setIsLoggedIn, setLoading, setUser } from "src/app/shared/state/shared.actions";
import { ValidationEffectAnimationService } from "src/app/services/validation-effect-animation.service";
import { UserService } from "src/app/services/user.service";
import { LoginCrucialData } from "../login.interface";
import { LocalStorageService } from "src/app/services/token/local-storage.service";

@Injectable()
export class LoginEffects {
    constructor(
        private _store: Store,
        private _loginService: LoginService,
        private _userService: UserService,
        private _actions$: Actions,
        private _router: Router,
        private _validationEffectAnimationService: ValidationEffectAnimationService,
        private _localStorageService: LocalStorageService
    ) { }

    public autoLogin$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginAuto),
            mergeMap((action) => {
                const user: any = this._localStorageService.get();
                if (user !== null) {
                    this._store.dispatch(setIsLoggedIn({ isLoggedIn: true }));
                    user.withRedirect = false;
                    this._store.dispatch(setUser({ user: user }));
                    return of(loginSuccess(user))
                }
                return of(loginFail());
            })
        )
    });

    public logout$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(logoutAuto),
            map((action) => {
                this._localStorageService.remove();
                this._store.dispatch(setIsLoggedIn({ isLoggedIn: false }));
                this._store.dispatch(setUser({user: null}));
                this._router.navigate(['/']);
            })
        )
    }, { dispatch: false });
    
    /**
     * Login Functionality
     */
    public login$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                this._store.dispatch(setLoading({ isLoading: true }));
                return this._loginService.enter({
                    email: action.email,
                    password: action.password
                }).pipe(
                    map((res) => {
                        const formattedUser: LoginCrucialData = this._userService.formatResponseAfterLogin(res.data);
                        this._localStorageService.set(formattedUser); 
                        this._store.dispatch(setIsLoggedIn({ isLoggedIn: true }));
                        this._store.dispatch(setUser({ user: formattedUser }));
                        return loginSuccess({ 
                            isLoggedIn: true,
                            userCredential: formattedUser.userCredential,
                            aboutToken: formattedUser.aboutToken,
                            withRedirect: true
                         });
                    }),
                    catchError((res) => {
                        this._validationEffectAnimationService.displayErrorAnimation(
                            'channel__login'
                        );
                        this._store.dispatch(setIsLoggedIn({ isLoggedIn: false }));
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
     * Login Redirect Functionality
     */
    public loginRedirect$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                if (action.withRedirect) {
                    this._router.navigate(['secure-app']);
                }
            })
        )
    }, { dispatch: false });

    /** 
     * Login Fail Redirect Functionality
     */
    public loginFailRedirect$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(loginFail),
            tap((action) => {
                this._router.navigate(['/']);
            })
        )
    }, { dispatch: false });
}