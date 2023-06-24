import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SecureAppInterceptorService } from "./services/secure-app-interceptor.service";

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SecureAppInterceptorService,
            multi: true
        }
    ]
})
export class SecureAppInterceptorModule {}