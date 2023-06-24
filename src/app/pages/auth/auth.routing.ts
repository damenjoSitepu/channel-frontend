import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { GuestGuardService } from "src/app/services/guards/guest.guard.service";

export const AuthRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [GuestGuardService],
        title: 'Channel | Login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [GuestGuardService],
        title: 'Channel | Register'
    }
]