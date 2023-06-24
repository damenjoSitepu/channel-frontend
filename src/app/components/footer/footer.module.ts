import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeFooterComponent } from "./home-footer/home-footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HomeFooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HomeFooterComponent
    ]
})
export class FooterModule {}