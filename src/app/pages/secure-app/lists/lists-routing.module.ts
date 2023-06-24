import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListsRoute } from "./lists.routing";

@NgModule({
    imports: [
        RouterModule.forChild(ListsRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class ListsRoutingModule {}