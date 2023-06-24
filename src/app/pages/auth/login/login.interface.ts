export interface LoginRequest {
    email: string;
    password: string;
}
export interface LoginResponse {
    isError: boolean;
    message: string;
    data: LoginCrucialData
}

export interface LoginCrucialData {
    isLoggedIn: boolean;
    userCredential: UserCredential;
    aboutToken: UserAboutToken;
    withRedirect?: boolean;
}

export interface UserCredential {
    fullName: string;
    email: string
}
export interface UserAboutToken {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    formattedExpiresIn: number;
}

