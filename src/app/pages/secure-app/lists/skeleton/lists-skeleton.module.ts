import { NgModule } from "@angular/core";
import { ListsSkeletonMainPageComponent } from './lists-skeleton-main-page/lists-skeleton-main-page.component';
import { ComponentsModule } from "src/app/components/components.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ListsSkeletonMainPageComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule
    ],
    exports: [
        ListsSkeletonMainPageComponent
    ]
})
export class ListsSkeletonModule {}