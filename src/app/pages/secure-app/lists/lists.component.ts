import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLists } from './state/lists.actions';
import { Subscription } from 'rxjs';
import { Lists } from './contracts/entity/lists.contract';
import { fetchLists, isUrgentFilterLists } from './state/lists.selector';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { getLoading } from 'src/app/shared/state/shared.selector';
import { ModalService } from 'src/app/services/modal.service';
import { CreateListsComponent } from 'src/app/shared/modals/create-lists/create-lists.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ActiveNavService } from 'src/app/services/active-nav.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit, OnDestroy {
    public lists: Lists[] = [];
    public isLoading: boolean = true;

    private _isLoadingSubscription$: Subscription = this._store.select(getLoading).subscribe((data: boolean) => {
        this.isLoading = data;
    });

    private _listsSubscription$: Subscription = this._store.select(fetchLists).subscribe((data: Lists[]) => {
        this.lists = data;
    });

    protected isUrgent!: boolean;

    constructor(
        private _store: Store,
        private _subscriptionService: SubscriptionService,
        private _modalService: ModalService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _activeNavService: ActiveNavService
    ) { }

    ngOnInit(): void {
        this.setup();
        this._activeNavService.setMain('your-lists');
    }

    ngOnDestroy(): void {
        this._subscriptionService.delete(
            this._listsSubscription$,
            this._isLoadingSubscription$,
        );
    }

    private setup(): void {
        this._activatedRoute.queryParams.subscribe((params: Params) => {
            this.isUrgent = JSON.parse(params['isUrgent'] ?? false);
            this._store.dispatch(getLists({ isUrgent: params['isUrgent'] }));
        })
    }

    openCreateLists(): void {
        this._modalService.create({
            component: CreateListsComponent
        });
    }  

    openListsOptions(id: number): void {
        this.lists = [...this.lists].map((list: Lists) => {
            if (list.showOptions && list.id !== id) {
                return { ...list, showOptions: false };
            }
            return list;
        });

        this.lists = [...this.lists].map((list: Lists) => {
            if (list.id === id) {
                return {
                    ...list,
                    showOptions: !list.showOptions
                }
            }
            return list;
        });
    }

    isMainOptionClosed(e: boolean): void {
        this.lists = [...this.lists].map((list: Lists) => {
            return {
                ...list,
                showOptions: false
            };
        })
    }

    filterIsUrgent(): void {
        this.isUrgent = !this.isUrgent;
        this._router.navigate([], {
            relativeTo: this._activatedRoute,
            queryParams: {
                isUrgent: this.isUrgent
            },
            queryParamsHandling: 'merge'
        });
    }
}
