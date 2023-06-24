import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { getActiveMainSidebar } from 'src/app/shared/state/shared.selector';

@Component({
  selector: 'main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnDestroy {
    private _getActiveMainSidebarSubscription$: Subscription = this._store.select(getActiveMainSidebar).subscribe((data: string) => {
        this.pathName = data;
    });
    protected pathName: string = 'home';

    constructor(
        private _subscriptionService: SubscriptionService,
        private _store: Store
    ) { }
    
    ngOnDestroy(): void {
        this._subscriptionService.delete(this._getActiveMainSidebarSubscription$);
    }
}
