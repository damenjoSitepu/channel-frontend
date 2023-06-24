import { environment } from "src/environments/environment";

export const SECURE_API_V1 = {
    REGISTER_USER: environment.SECURE_API_URL + 'c-auth/register',
    LOGIN_USER: environment.SECURE_API_URL + 'c-auth/login'
};