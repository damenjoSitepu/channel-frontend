import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SingleMessageComponent } from "./single-message/single-message.component";

@NgModule({
    declarations: [
        SingleMessageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SingleMessageComponent
    ]
})
export class MessageModule {}