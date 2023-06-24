import { NgModule } from "@angular/core";
import { GlobalNotFoundComponent } from "./global-not-found.component";
import { CommonModule } from "@angular/common";
import { GlobalNotFoundRoutingModule } from "./global-not-found-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    GlobalNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GlobalNotFoundRoutingModule
  ],
  exports: [
    GlobalNotFoundComponent
  ]
})
export class GlobalNotFoundModule {}