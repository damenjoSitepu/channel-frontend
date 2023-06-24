import { LoginRequest, LoginResponse } from './login.interface';
import { Observable } from "rxjs";

export interface LoginRepository {
    enter(data: LoginRequest): Observable<LoginResponse>;
}