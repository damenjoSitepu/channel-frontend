import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ListsApi } from "../apis/lists-api";
import { createLists, createListsFailed, createListsSuccess, deleteLists, deleteListsFailed, deleteListsSuccess, getLists, getListsSuccess, updateMarkStatusLists, updateMarkStatusListsSuccess } from "./lists.actions";
import { catchError, exhaustMap, finalize, map, of, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { setErrorMessage, setLoading, setSuccessMessage, setTopLoading } from "src/app/shared/state/shared.actions";
import { CreateListsApi } from "src/app/shared/modals/create-lists/apis/create-lists-api";
@Injectable({
    providedIn: 'root'
})
export class ListsEffects {
    constructor(
        private _actions$: Actions,
        private _listsApi: ListsApi,
        private _createListsApi: CreateListsApi,
        private _store: Store
    ) { }
    
    getLists$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(getLists),
            exhaustMap((actions) => {
                this._store.dispatch(setLoading({ isLoading: true }));
                return this._listsApi.get(actions).pipe(
                    map((res) => {
                        return getListsSuccess(res);
                    }),
                    finalize(() => {
                        this._store.dispatch(setLoading({ isLoading: false }));
                    })
                )
            })
        )
    });

    public updateMarkStatusLists$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(updateMarkStatusLists),
            exhaustMap((actions) => {
                this._store.dispatch(setTopLoading({isLoading: true}));
                return this._listsApi.updateMark(actions.listId, actions.markStatus, actions.prevMarkStatus).pipe(
                    map((res) => {
                        return updateMarkStatusListsSuccess({ data: res });
                    }),
                    catchError((res) => {
                        return of();
                    }),
                    finalize(() => {
                        this._store.dispatch(setTopLoading({ isLoading: false }));
                    })
                )
            })
        )
    });

    public updateMarkStatusListsSuccess$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(updateMarkStatusListsSuccess),
            tap((actions) => {
                
            })
        )
    }, { dispatch: false });


    public deleteLists$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(deleteLists),
            exhaustMap((actions) => {
                this._store.dispatch(setTopLoading({isLoading: true}));
                return this._listsApi.delete(actions.listId).pipe(
                    map((res) => {
                        return deleteListsSuccess({ data: res });
                    }),
                    catchError((res) => {
                        return of(deleteListsFailed({ message: res.error.message }));
                    }),
                    finalize(() => {
                        this._store.dispatch(setTopLoading({isLoading: false}));
                    })
                )
            })
        )
    });

    public deleteListsSuccess$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(deleteListsSuccess),
            tap((actions) => {
                
            })
        )
    }, { dispatch: false });

    public createLists$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(createLists),
            exhaustMap((actions) => {
                this._store.dispatch(setTopLoading({isLoading: true}));
                return this._createListsApi.create(actions).pipe(
                    map((res) => {
                        return createListsSuccess({ data: res });
                    }),
                    catchError((res) => {
                        return of(createListsFailed({ message: res.error.message }));
                    }),
                    finalize(() => {
                        this._store.dispatch(setTopLoading({isLoading: false}));
                    })
                )
            })
        )
    });

    public createListsSuccess$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(createListsSuccess),
            tap((actions) => {
                this._store.dispatch(setSuccessMessage({ successMessage: actions.data.message }));
            })
        )
    }, { dispatch: false });

    public createListsFailed$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(createListsFailed),
            tap((actions) => {
                this._store.dispatch(setErrorMessage({ errorMessage: actions.message }));
            })
        )
    }, { dispatch: false });
}