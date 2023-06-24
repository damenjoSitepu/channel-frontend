import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setActiveMainSidebar } from '../shared/state/shared.actions';

@Injectable({
  providedIn: 'root'
})
export class ActiveNavService {
    constructor(
        private _store: Store
    ) { }

    setMain(pathName: string = 'home'): void {
        this._store.dispatch(setActiveMainSidebar({
            activePath: pathName
        }));
    }
}
