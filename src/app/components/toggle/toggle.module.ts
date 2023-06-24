import { NgModule } from "@angular/core";
import { MainToggleComponent } from "./main-toggle/main-toggle.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        MainToggleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        MainToggleComponent
    ]
})
export class ToggleModule {}