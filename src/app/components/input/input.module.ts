import { NgModule } from "@angular/core";
import { TextComponent } from './text/text.component';
import { CommonModule } from "@angular/common";
import { TextareaComponent } from './textarea/textarea.component';
import { SelectColorComponent } from './select-color/select-color.component';

@NgModule({
    declarations: [
        TextComponent,
        TextareaComponent,
        SelectColorComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextComponent,
        TextareaComponent,
        SelectColorComponent
    ]
})
export class InputModule {}