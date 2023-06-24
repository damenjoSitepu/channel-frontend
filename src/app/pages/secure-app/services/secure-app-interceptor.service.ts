import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/token/local-storage.service';
import { GUEST_URL } from '../urls/guest-url';

@Injectable({
  providedIn: 'root'
})
export class SecureAppInterceptorService implements HttpInterceptor {
    constructor(
        private _localStorageService: LocalStorageService
    ) { }
    
    /**
     * Interceptors To Check User Custom Token
     * @param req 
     * @param next 
     * @returns 
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let modifiedHeaderRequest = req;
        if (!GUEST_URL.includes(req.url)) {
            const getToken = this._localStorageService.get()?.aboutToken?.accessToken;
            modifiedHeaderRequest = req.clone({
                headers: req.headers.append('Channel-Authorization', 'ChannelBearer ' + getToken)
            });
        }
        return next.handle(modifiedHeaderRequest);
    }
}
