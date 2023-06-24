import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationEffectAnimationService {
    /**
     * Display error animation
     */
    public displayErrorAnimation(elWrapper: string): void {
        const getLoginElement = document.querySelector("." + elWrapper);
        getLoginElement?.classList.add('channel__invalid_animation');
        setTimeout(() => {
            getLoginElement?.classList.remove('channel__invalid_animation');
        }, 251);
    }
}
