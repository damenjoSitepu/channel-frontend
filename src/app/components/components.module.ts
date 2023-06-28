import { NgModule } from "@angular/core";
import { NavbarModule } from "./navbar/navbar.module";
import { FooterModule } from "./footer/footer.module";
import { ButtonModule } from "./button/button.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ToggleModule } from "./toggle/toggle.module";
import { LoaderModule } from "./loader/loader.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageModule } from "./message/error.module";
import { SidebarModule } from "./sidebar/sidebar.module";
import { IconModule } from "./icon/icon.module";
import { IconsModule } from "./icons/icons.module";
import { InputModule } from "./input/input.module";
@NgModule({
    imports: [
        NavbarModule,
        FooterModule,
        ButtonModule,
        ToggleModule,
        MessageModule,
        LoaderModule,
        SidebarModule,
        IconModule,
        IconsModule,
        StoreModule,
        EffectsModule,
        FormsModule,
        ReactiveFormsModule,
        InputModule
    ],
    exports: [
        NavbarModule,
        FooterModule,
        ButtonModule,
        ToggleModule,
        MessageModule,
        LoaderModule,
        SidebarModule,
        IconModule,
        IconsModule,
        StoreModule,
        EffectsModule,
        InputModule
    ],
})
export class ComponentsModule {}