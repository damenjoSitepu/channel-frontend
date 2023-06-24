import { LoginCrucialData, UserAboutToken } from "../pages/auth/login/login.interface";
import { UserTokenModel } from "./user-token.model";

export class UserModel {
    /** User Credential */
    private fullName!: string;
    private email!: string;
    /** Token Data */
    private aboutToken!: UserTokenModel;

    constructor(user: LoginCrucialData) {
        this.fullName = user.userCredential.fullName;
        this.email = user.userCredential.email;
        this.aboutToken = user.aboutToken;
    }

    getFullName(): string {
        return this.fullName;
    }

    getEmail(): string {
        return this.email;
    }

    getAboutToken(): UserAboutToken {
        return this.aboutToken;
    }
}
