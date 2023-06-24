import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeNavModule } from "./home-nav/home-nav.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AppNavModule } from "./app-nav/app-nav.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HomeNavModule,
        AppNavModule,
        StoreModule,
        EffectsModule
    ],
    exports: [
        HomeNavModule,
        AppNavModule,
        StoreModule,
        EffectsModule
    ],
})
export class NavbarModule {}