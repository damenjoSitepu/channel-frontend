import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListStatusRoute } from "./list-status.routing";

@NgModule({
    imports: [
        RouterModule.forChild(ListStatusRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class ListStatusRoutingModule {}