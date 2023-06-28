import { NgModule } from "@angular/core";
import { TextComponent } from './text/text.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TextComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextComponent
    ]
})
export class InputModule {}