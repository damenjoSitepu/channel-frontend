import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks/tasks.component";
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        TasksComponent,
        HomeComponent
    ],
    exports: [
        TasksComponent,
        HomeComponent
    ]
})
export class IconModule {}