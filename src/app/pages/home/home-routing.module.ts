import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeRouting } from "./home.routing";

@NgModule({
    imports: [
        RouterModule.forChild(HomeRouting)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}