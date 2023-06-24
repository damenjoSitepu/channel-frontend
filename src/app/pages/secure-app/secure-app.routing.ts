import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListsComponent } from "./lists/lists.component";

export const SecureAppRouting: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: 'App | Dashboard'
    },
    {
        path: 'your-lists',
        loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule)
    }
]