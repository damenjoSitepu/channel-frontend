import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { ComponentsModule } from "src/app/components/components.module";
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterModule } from "./register/register.module";
import { LoginModule } from "./login/login.module";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        RegisterModule,
        LoginModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        AuthRoutingModule,
    ]
})
export class AuthModule {}