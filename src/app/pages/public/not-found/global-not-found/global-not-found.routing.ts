import { Routes } from "@angular/router";
import { GlobalNotFoundComponent } from "./global-not-found.component";

export const GlobalNotFoundRouting: Routes = [
  {
    path: '',
    component: GlobalNotFoundComponent,
    title: 'Channel | Not Found'
  }
]