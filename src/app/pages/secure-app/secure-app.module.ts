import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecureAppRoutingModule } from "./secure-app-routing.module";
import { ListsComponent } from './lists/lists.component';
import { ComponentsModule } from "src/app/components/components.module";
import { ListsSkeletonModule } from "./lists/skeleton/lists-skeleton.module";
import { ListsComponentsModule } from "./lists/components/lists-components.module";
import { NgClickOutsideDirective } from "ng-click-outside2";

@NgModule({
    declarations: [
        DashboardComponent,
        ListsComponent
    ],
    imports: [
        CommonModule,
        SecureAppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        ListsSkeletonModule,
        ListsComponentsModule,
        NgClickOutsideDirective
    ],
    exports: [
        DashboardComponent,
        ListsComponent,
        SecureAppRoutingModule
    ]
})
export class SecureAppModule {}