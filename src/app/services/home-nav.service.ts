import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { homeNavActiveRouteStart } from '../components/state/home-nav/home-nav.action';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeNavService {
    constructor(
        private _store: Store,
        private _router: Router
    ) { }
    
    /**
     * Dispatch active route name using actions
     * @param activeRouteName 
     * @returns 
     */
    public dispatchActiveRouteName() {
        this._store.dispatch(
            homeNavActiveRouteStart({
                activeRouteName: this._router.url
            }),
        )
    }
}
