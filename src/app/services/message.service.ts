import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setErrorMessage, setSuccessMessage } from '../shared/state/shared.actions';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    constructor(
        private _store: Store
    ) { }

    /**
     * Clean The Error Message
     */
    public cleanError(): void {
        this._store.dispatch(setErrorMessage({ errorMessage: '' }));
    }

    /**
     * Clean The Success Message
     */
    public cleanSuccess(): void {
        this._store.dispatch(setSuccessMessage({ successMessage: '' }));
    }

    /**
     * Add Error Message
     */
    public addError(errorMessage: string): void {
        this._store.dispatch(setErrorMessage({ errorMessage }));
    }

    /**
     * Add Success Message
     */
    public addSuccess(successMessage: string): void {
        this._store.dispatch(setSuccessMessage({ successMessage }));
    }
}
