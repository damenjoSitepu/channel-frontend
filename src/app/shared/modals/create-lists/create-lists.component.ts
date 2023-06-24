import { Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'src/app/components/icons/icons.module';
import { ModalService } from 'src/app/services/modal.service';
import { CreateListsRequest } from './create-lists.interface';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { Store } from '@ngrx/store';
import { createLists } from 'src/app/pages/secure-app/lists/state/lists.actions';
import { getErrorMessage, getSuccessMessage, getTopLoading } from '../../state/shared.selector';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-create-lists',
    standalone: true,
        imports: [
            CommonModule,
            IconsModule,
            FormsModule,
            ComponentsModule,
        ],
    templateUrl: './create-lists.component.html',
    styleUrls: ['./create-lists.component.scss']
})
export class CreateListsComponent implements OnDestroy {
    protected createListsRequest: CreateListsRequest = {
        id: null,
        title: ''
    };

    private _isSuccessSubscription$ = this._store.select(getSuccessMessage).subscribe(data => {
        if (data && data.length > 0) {
            this.closeModal();
            this._messageService.cleanSuccess();
        }
    });

    private _isErrorSubscription$ = this._store.select(getErrorMessage).subscribe(data => {
        if (data && data.length > 0) {
            this.errorMessage = data;
            this._messageService.cleanError();
        }
    });
    errorMessage: string = '';

    private _isLoadingSubscription$ = this._store.select(getTopLoading).subscribe(data => {
        this.isLoading = data;
    });
    isLoading: boolean = false;

    constructor(
        private _modalService: ModalService,
        private _renderer: Renderer2,
        private _el: ElementRef,
        private _store: Store,
        private _subscriptionService: SubscriptionService,
        private _messageService: MessageService
    ) { }
    
    ngOnDestroy(): void {
        this._subscriptionService.delete(this._isLoadingSubscription$,this._isErrorSubscription$,this._isSuccessSubscription$);
    }

    closeModal(): void {
        // const getContainer = this._el.nativeElement.querySelector('.channel__modal_container');
        // const getInside = this._el.nativeElement.querySelector('.channel__create_lists');
        // this._renderer.removeClass(getContainer, 'openAnimation');
        // this._renderer.removeClass(getInside, 'openAnimationInside');
        // this._renderer.addClass(getContainer, 'closeAnimation');
        // setTimeout(() => {
            this._modalService.dismiss();
        // }, 201);
    }

    createLists(): void {
        this._store.dispatch(createLists(this.createListsRequest));
    }
}
