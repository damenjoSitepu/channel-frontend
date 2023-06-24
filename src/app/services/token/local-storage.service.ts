import { Injectable } from '@angular/core';
import { TokenApi } from '../contracts/token-api.interface';
import { LoginCrucialData } from 'src/app/pages/auth/login/login.interface';
import { Store } from '@ngrx/store';
import { logoutAuto } from 'src/app/pages/auth/login/state/login.actions';
import { URL } from 'src/app/const/utils/url';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements TokenApi {
    private timeoutInterval: any;

    private invalidTokenSourceMessage: any = { error: { message: 'Token source was invalid!' } };

    constructor(
        private _store: Store
    ){}

    public set(user: LoginCrucialData): void {
        if (!this.handleToken(user.aboutToken.accessToken)) {
            throw this.invalidTokenSourceMessage;
        }
        localStorage.setItem('userData', JSON.stringify(user));
        this.runTimeInterval(user);
    }

    public get(): LoginCrucialData | null {
        const userDataString = localStorage.getItem('userData');
        if (userDataString) {
            const userData: LoginCrucialData = JSON.parse(userDataString);
            if (!this.handleToken(userData.aboutToken.accessToken)) {
                throw this.invalidTokenSourceMessage;
            }
            this.runTimeInterval(userData);
            return userData;
        }
        return null;
    }

    public remove(): void {
        localStorage.removeItem('userData');
        if (this.timeoutInterval) {
            clearTimeout(this.timeoutInterval);
            this.timeoutInterval = null;
        }
    }

    private runTimeInterval(user: LoginCrucialData) {
        const todayUnix = Math.floor(Date.now() / 1000);
        const timeInterval = (user.aboutToken.formattedExpiresIn - todayUnix) * 1000;
        this.timeoutInterval = setTimeout(() => {
            this._store.dispatch(logoutAuto());
        }, timeInterval);
    }

    private handleToken(accessToken: string): boolean {
        let payload: any = accessToken.split(".")[1];
        if (payload) {
            payload = JSON.parse(atob(payload));
            if (!payload.hasOwnProperty('iss')) return false;
            if (payload.iss === URL.LOGIN_FROM) return true;
        }
        return false;
    }
}

