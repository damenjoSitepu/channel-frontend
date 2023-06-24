import { NgModule } from "@angular/core";
import { TopLoaderComponent } from './top-loader/top-loader.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TopLoaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TopLoaderComponent
    ]
})
export class LoaderModule {}