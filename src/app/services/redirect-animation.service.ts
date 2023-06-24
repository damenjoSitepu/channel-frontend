import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectAnimationService {
    public constructor(
        private _router: Router
    ) {}

    /**
     * Back To Home And Close This Page, also
     * add smooth animation while closing the `modal`
     * @param route 
     */
    public backTo(route: string[] | string, elWrapper: string, elAnimate: string): void {
        const getContainerElement = document.querySelector('.' + elWrapper);
        getContainerElement?.classList.add(elAnimate);
        setTimeout(() => {
            this._router.navigate([...route]);
        }, 151);
    }
}
