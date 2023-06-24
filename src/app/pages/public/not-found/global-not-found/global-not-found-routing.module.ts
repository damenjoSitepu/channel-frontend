import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GlobalNotFoundRouting } from "./global-not-found.routing";

@NgModule({
  imports: [
    RouterModule.forChild(GlobalNotFoundRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class GlobalNotFoundRoutingModule {}