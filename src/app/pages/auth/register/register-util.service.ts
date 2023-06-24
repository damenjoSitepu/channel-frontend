import { Injectable } from '@angular/core';
import { RegisterRequest } from './register.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterUtilService {
    public clearForm(): RegisterRequest {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            registerAgreement: false,
        }
    }
}
