import { RegisterRepository } from './register.repository';
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { REGISTER_STATE_NAME } from "./state/register.selector";
import { RegisterReducer } from "./state/register.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RegisterEffects } from "./state/register.effects";

@NgModule({
    imports: [
        EffectsModule.forFeature([RegisterEffects]),
        StoreModule.forFeature(REGISTER_STATE_NAME, RegisterReducer)
    ],
    exports: [
        StoreModule
    ]
})
export class RegisterModule {}