import { NgModule } from "@angular/core";
import { ListsRoutingModule } from "./lists-routing.module";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "src/app/components/components.module";
import { StoreModule } from "@ngrx/store";
import { LISTS_STATE_NAME } from "./state/lists.selector";
import { ListsReducer } from "./state/lists.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ListsEffects } from "./state/lists.effects";
import { ListsSkeletonModule } from "./skeleton/lists-skeleton.module";

@NgModule({
    imports: [
        ListsRoutingModule,
        CommonModule,
        ComponentsModule,
        ListsSkeletonModule,
        EffectsModule.forFeature([ListsEffects]),
        StoreModule.forFeature(LISTS_STATE_NAME, ListsReducer),
    ],
    exports: [
        ListsRoutingModule
    ]
})
export class ListsModule {}