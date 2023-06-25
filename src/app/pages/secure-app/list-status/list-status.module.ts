import { NgModule } from "@angular/core";
import { ListStatusComponent } from './list-status.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListStatusRoutingModule } from "./list-status-routing.module";
import { IconsModule } from "src/app/components/icons/icons.module";
import { ComponentsModule } from "src/app/components/components.module";
import { ListStatusComponentsModule } from "./components/list-status-components.module";

@NgModule({
    declarations: [
        ListStatusComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ListStatusRoutingModule,
        IconsModule,
        ComponentsModule,
        ListStatusComponentsModule
    ],
    exports: [
        ListStatusComponent
    ]
})
export class ListStatusModule {}