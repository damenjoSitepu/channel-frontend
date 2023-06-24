import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeSidebarNavComponent } from "./home-sidebar-nav/home-sidebar-nav.component";
import { HomeNavComponent } from "./home-nav.component";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { HOME_NAV_STATE_NAME } from "../../state/home-nav/home-nav.selector";
import { HomeNavReducer } from "../../state/home-nav/home-nav.reducer";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
    declarations: [
        HomeNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeSidebarNavComponent,
        EffectsModule.forFeature([]),
        StoreModule.forFeature(HOME_NAV_STATE_NAME, HomeNavReducer)
    ],
    exports: [
        HomeNavComponent,
        StoreModule,
        EffectsModule
    ]
})
export class HomeNavModule {}