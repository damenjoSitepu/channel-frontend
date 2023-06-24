import { environment } from "src/environments/environment";

/**
 * This Is Guest URL Which To Tell The Interceptors 
 * For Do Not Check Even The Custom 
 * Token Was Exists Or Not
 */
export const GUEST_URL = [
    environment.SECURE_API_URL,
    environment.SECURE_API_URL + 'c-auth/register',
    environment.SECURE_API_URL + 'c-auth/login',
];


