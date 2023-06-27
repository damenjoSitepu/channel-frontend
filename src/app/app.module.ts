import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoginEffects } from './pages/auth/login/state/login.effects';
import { SecureAppInterceptorModule } from './pages/secure-app/secure-app-interceptor.module';
import { ChannelPlaceholderDirective } from './shared/directives/channel-placeholder.directive';
import { CreateListStatusComponent } from './shared/modals/create-list-status/create-list-status.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ComponentsModule,
        AppRoutingModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([LoginEffects]),
        StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
        SharedModule,
        SecureAppInterceptorModule,
        ChannelPlaceholderDirective,
        CreateListStatusComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
