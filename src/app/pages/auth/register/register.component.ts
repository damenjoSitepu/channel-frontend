import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeNavService } from 'src/app/services/home-nav.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { registerStart } from './state/register.actions';
import { getErrorMessage, getLoading } from 'src/app/shared/state/shared.selector';
import { MessageService } from 'src/app/services/message.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { RedirectAnimationService } from 'src/app/services/redirect-animation.service';
import { RegisterRepository } from './register.repository';
import { RegisterRequest } from './register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
    /**
     | Properties
     | ---------------------------------------------------------
     */
    protected closeImageUrl: string = '/assets/navbar/close.svg';
    protected registerRequest: RegisterRequest = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        registerAgreement: false,
    };
    protected registerErrorMessage: string = '';
    protected isLoadingRegister: boolean = false;
    protected errorMessage: string = '';
    protected isLoading$: Observable<boolean> = this._store.select(getLoading);
    protected errorMessageSubscription$: Subscription = this._store.select(getErrorMessage).subscribe(data => {
        if (data && data?.length > 0) {
            this.errorMessage = data;
            this._messageService.cleanError();
        }
    });

    /**
     | Lifecycle
     | ---------------------------------------------------------
     */
    public constructor(
        private _activatedRoute: ActivatedRoute,
        private _homeNavService: HomeNavService,
        private _store: Store,
        private _messageService: MessageService,
        private _subscriptionService: SubscriptionService,
        public _redirectAnimationService: RedirectAnimationService,
    ) { 
        this.initNav();
    }

    ngOnDestroy() {
        this._subscriptionService.delete(this.errorMessageSubscription$);
    }

    /**
     | Additional Functionality
     | ---------------------------------------------------------
     */
    protected initNav(): void {
        this._activatedRoute.params.subscribe((_) => {
            this._homeNavService.dispatchActiveRouteName();
        });
    }

    protected ChangeRegisterAgreement(value: any): void {
        this.registerRequest.registerAgreement = value;
    }

    /**
     | CRUD Functionality
     | ---------------------------------------------------------
     */
    protected register() {
        this._store.dispatch(registerStart(this.registerRequest));
    }
}
