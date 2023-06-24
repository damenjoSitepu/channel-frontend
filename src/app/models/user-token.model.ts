import { UserAboutToken } from "../pages/auth/login/login.interface";

export class UserTokenModel {
    accessToken!: string;
    tokenType!: string;
    expiresIn!: number;

    constructor(aboutToken: UserAboutToken) {
        this.accessToken = aboutToken.accessToken;
        this.tokenType = aboutToken.tokenType;
        this.expiresIn = aboutToken.expiresIn;
    }
}