import { NgModule } from "@angular/core";
import { MainOptionComponent } from './main-option/main-option.component';
import { CommonModule } from "@angular/common";
import { NgClickOutsideDirective } from "ng-click-outside2";
import { IconsModule } from "src/app/components/icons/icons.module";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
    declarations: [
        MainOptionComponent
    ],
    imports: [
        CommonModule,
        NgClickOutsideDirective,
        IconsModule,
        ComponentsModule
    ],
    exports: [
        MainOptionComponent
    ]
})
export class ListStatusComponentsModule {}