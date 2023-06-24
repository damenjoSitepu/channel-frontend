import { NgModule } from "@angular/core";
import { MainSidebarComponent } from "./main-sidebar/main-sidebar.component";
import { CommonModule } from "@angular/common";
import { IconModule } from "../icon/icon.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        MainSidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        IconModule
    ],
    exports: [
        MainSidebarComponent
    ]
})
export class SidebarModule {}