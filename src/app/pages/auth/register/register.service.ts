import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SECURE_API_V1 } from 'src/app/const/secure-api/secure-api-v1';
import { RegisterRequest, RegisterResponse } from './register.interface';
import { RegisterRepository } from './register.repository';
@Injectable({
  providedIn: 'root'
})
export class RegisterService implements RegisterRepository {
    public constructor(
        private _http: HttpClient
    ) { }
    
    public create(request: RegisterRequest): Observable<RegisterResponse> {
        return this._http.post<RegisterResponse>(SECURE_API_V1.REGISTER_USER, request);
    }
}
