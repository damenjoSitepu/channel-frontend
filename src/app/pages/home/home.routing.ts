import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { GuestGuardService } from "src/app/services/guards/guest.guard.service";

export const HomeRouting: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [GuestGuardService],
        title: 'Channel | Home'
    }
]