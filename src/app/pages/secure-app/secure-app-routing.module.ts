import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SecureAppRouting } from "./secure-app.routing";

@NgModule({
  imports: [
    RouterModule.forChild(SecureAppRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class SecureAppRoutingModule {}