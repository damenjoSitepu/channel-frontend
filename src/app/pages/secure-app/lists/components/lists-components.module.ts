import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentsModule } from "src/app/components/components.module";
import { IconsModule } from "src/app/components/icons/icons.module";
import { MainOptionComponent } from "./main-option/main-option.component";
import { NgClickOutsideDirective } from "ng-click-outside2";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        IconsModule,
        NgClickOutsideDirective
    ],
    declarations: [
        MainOptionComponent
    ],
    exports: [
        MainOptionComponent
    ]
})
export class ListsComponentsModule {}