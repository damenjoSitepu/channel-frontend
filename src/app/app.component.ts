import { SubscriptionService } from 'src/app/services/subscription.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getActiveRouteName } from './components/state/home-nav/home-nav.selector';
import { PUBLIC_NAV } from './const/links/nav-menus';
import { getIsLoggedIn, getLoading, getTopLoading } from './shared/state/shared.selector';
import { loginAuto } from './pages/auth/login/state/login.actions';
import { ChannelPlaceholderDirective } from './shared/directives/channel-placeholder.directive';
import { ModalRequirements, ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    /**
     * View Container Ref To Dynamic Component Such As Modal
     */
    @ViewChild(ChannelPlaceholderDirective) _channelPlaceholder!: ChannelPlaceholderDirective;

    /**
     * Define Active route name property
     */
    protected activeRouteName !: Observable<string>;
    protected publicNav: string[] = PUBLIC_NAV;
    
    /**
     * Define Loading
     */
    protected isLoading: boolean = false;

    private _isLoadingSubscription$ = this._store.select(getTopLoading).subscribe(data => {
        setTimeout(() => this.isLoading = data, 0)
    });

    
    protected isLoadAppNav: boolean = false;

    private setupApplicationSub$ = this._store.select(getIsLoggedIn).subscribe(data => {
        this.isLoadAppNav = data;
    });

    private _setupGenerateModal$ = this._modalService.modalRequirements.subscribe((data: ModalRequirements) => {
        if (data.component === null && this._channelPlaceholder?.vCR !== undefined) {
            this._channelPlaceholder.vCR.clear();
        }
        if (data.component !== null && this._channelPlaceholder?.vCR !== undefined) {
            this._channelPlaceholder.vCR.clear();
            this._channelPlaceholder.vCR.createComponent(data.component);
        }
    });
    
    public constructor(
        private _store: Store,
        private _subscriptionService: SubscriptionService,
        private _modalService: ModalService
    ) {
        this.getActiveRouteName();
    }

    public ngOnInit(): void {
        this.setupApplication();
    }

    public ngOnDestroy(): void {
        this._subscriptionService.delete(
            this.setupApplicationSub$,
            this._isLoadingSubscription$,
            this._setupGenerateModal$
        );
    }

    /**
     * Get Active Route By Selector
     */
    private getActiveRouteName(): void {
        this.activeRouteName = this._store.select(getActiveRouteName);
    }

    public defineNav(activeRouteName: any): boolean {
        if (this.publicNav.includes(activeRouteName)) return true;
        return false;
    }

    private setupApplication(): void {
        this._store.dispatch(loginAuto());
    }
}
