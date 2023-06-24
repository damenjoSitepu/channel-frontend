import { LoginCrucialData } from "src/app/pages/auth/login/login.interface";

export interface TokenApi {
    set(user: LoginCrucialData): void;    

    get(): LoginCrucialData | null | undefined

    remove(): void;
}