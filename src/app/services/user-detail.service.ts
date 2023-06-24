import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginCrucialData } from '../pages/auth/login/login.interface';
import { getUser } from '../pages/auth/login/state/login.selector';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
    constructor(
        private _store: Store
    ) { }
    
    public get(): Observable<LoginCrucialData | null> {
        return this._store.select(getUser);
    }
}
