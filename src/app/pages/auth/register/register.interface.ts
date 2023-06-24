export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    registerAgreement: boolean;
}

export interface RegisterResponse {
    isError: boolean;
    message: string;
}