import { Routes } from "@angular/router";
import { AuthGuardService } from "./services/guards/auth.guard.service";

export const AppRouting: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'secure-app',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./pages/secure-app/secure-app.module').then(m => m.SecureAppModule)
    },
    {
        path: '**',
        loadChildren: () => import('./pages/public/not-found/global-not-found/global-not-found.module').then(m => m.GlobalNotFoundModule)
    },
];