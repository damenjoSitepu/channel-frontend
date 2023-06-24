import { Injectable } from '@angular/core';
import { LoginCrucialData } from '../pages/auth/login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    public formatResponseAfterLogin(user: LoginCrucialData): LoginCrucialData {
        const userCredential = { ...user.userCredential };
        const aboutToken = {
            ...user.aboutToken,
            formattedExpiresIn: Math.floor(Date.now() / 1000) + user.aboutToken.expiresIn
        };

        return {
            isLoggedIn: true,
            userCredential,
            aboutToken
        };
    }
}
