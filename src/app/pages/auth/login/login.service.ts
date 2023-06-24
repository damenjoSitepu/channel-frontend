import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRepository } from './login.repository';
import { LoginRequest, LoginResponse } from './login.interface';
import { Observable } from 'rxjs';
import { SECURE_API_V1 } from 'src/app/const/secure-api/secure-api-v1';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements LoginRepository {
    public constructor(
        private _http: HttpClient
    ) { }

    public enter(request: LoginRequest): Observable<LoginResponse> {
        return this._http.post<LoginResponse>(SECURE_API_V1.LOGIN_USER, request);
    }

  /**
   * Validate password
   */
  public validatePassword(password: string): { password: string } {
    if (password === '' || password === undefined) {
      return {
        password: 'Password cannot be empty'
      };
    }
    return {
      password: ''
    };
  }

  /**
   * Validate username
   */
  public validateUsername(username: string): { username: string } {
    if (username === '' || username === undefined) {
      return {
        username: 'Username cannot be empty'
      };
    }
    username = username.trim();
    if (username.length < 5) {
      return {
        username: 'Username must be greater than 5 characters'
      };
    }
    // if (username.length > 20) {
    //   return {
    //     username: 'Username cannot be greater than 20 characters'
    //   };
    // }
    if (/\s/.test(username)) {
      return {
        username: 'Username cannot be contains white space'
      }
    }
    return { username: '' };
  }
}
