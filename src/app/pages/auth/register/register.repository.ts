import { Observable } from "rxjs";
import { RegisterRequest, RegisterResponse } from "./register.interface";

export interface RegisterRepository {
    create(data: RegisterRequest): Observable<RegisterResponse>;
}