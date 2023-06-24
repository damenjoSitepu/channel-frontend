import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { getUser } from 'src/app/shared/state/shared.selector';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService implements CanActivate {
    constructor(
        private _store: Store,
        private _location: Location,
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | any {
        this._store.pipe(select(getUser), take(1)).subscribe((data) => {
            if (data !== null) {
                this._router.navigate(['secure-app']);
                return true;
            } else {
                return false;
            }
        });
    }
}
