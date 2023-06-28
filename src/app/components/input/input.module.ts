import { NgModule } from "@angular/core";
import { TextComponent } from './text/text.component';
import { CommonModule } from "@angular/common";
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
    declarations: [
        TextComponent,
        TextareaComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextComponent,
        TextareaComponent
    ]
})
export class InputModule {}