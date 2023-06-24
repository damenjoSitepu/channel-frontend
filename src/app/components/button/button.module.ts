import { NgModule } from "@angular/core";
import { MainButtonComponent } from './main-button/main-button.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MainButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MainButtonComponent
    ]
})
export class ButtonModule {}