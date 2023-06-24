import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

@Injectable()
export class HomeNavEffects {
    public constructor(
        private _actions$: Actions,
    ) { }
}