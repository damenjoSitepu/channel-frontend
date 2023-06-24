import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { LOGIN_STATE_NAME } from "./state/login.selector";
import { LoginReducer } from "./state/login.reducer";
import { EffectsModule } from "@ngrx/effects";
import { LoginEffects } from "./state/login.effects";

@NgModule({
    imports: [
        EffectsModule.forFeature([]),
        StoreModule.forFeature(LOGIN_STATE_NAME, LoginReducer),
    ],
    exports: [
        StoreModule
    ]
})
export class LoginModule {}