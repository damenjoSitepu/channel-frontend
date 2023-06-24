import { NgModule } from "@angular/core";
import { IconsComponent } from "./icons.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [IconsComponent],
    exports: [IconsComponent],
    imports: [CommonModule]
})
export class IconsModule {}