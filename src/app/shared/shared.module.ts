import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { SHARED_STATE_NAME } from "./state/shared.selector";
import { SharedReducer } from "./state/shared.reducer";

@NgModule({
    imports: [
        StoreModule.forFeature(SHARED_STATE_NAME,SharedReducer)
    ],
    exports: [
        StoreModule
    ]
})
export class SharedModule {}