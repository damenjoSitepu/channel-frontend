import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ComponentsModule
    ],
    exports: [
        HomeComponent,
        HomeRoutingModule
    ]
}) 
export class HomeModule {}