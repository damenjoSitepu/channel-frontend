import { NgModule } from "@angular/core";
import { ListStatusComponent } from './list-status.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListStatusRoutingModule } from "./list-status-routing.module";

@NgModule({
    declarations: [
        ListStatusComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ListStatusRoutingModule
    ],
    exports: [
        ListStatusComponent
    ]
})
export class ListStatusModule {}