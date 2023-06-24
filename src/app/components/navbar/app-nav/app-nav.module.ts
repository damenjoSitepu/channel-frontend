import { NgModule } from "@angular/core";
import { AppNavComponent } from "./app-nav.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppSidebarNavComponent } from "./app-sidebar-nav/app-sidebar-nav.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HOME_NAV_STATE_NAME } from "../../state/home-nav/home-nav.selector";
import { HomeNavReducer } from "../../state/home-nav/home-nav.reducer";
import { IconsModule } from "../../icons/icons.module";

@NgModule({
    declarations: [
        AppNavComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        IconsModule,
        AppSidebarNavComponent,
        EffectsModule.forFeature([]),
        StoreModule.forFeature(HOME_NAV_STATE_NAME, HomeNavReducer)
    ],
    exports: [
        StoreModule,
        EffectsModule,
        AppNavComponent
    ]
})
export class AppNavModule {}