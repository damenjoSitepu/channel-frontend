import { Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeNavService } from 'src/app/services/home-nav.service';
import { LoginService } from './login.service';
import { Store } from '@ngrx/store';
import { getErrorMessage, getSuccessMessage } from 'src/app/shared/state/shared.selector';
import { MessageService } from 'src/app/services/message.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { loginStart } from './state/login.actions';

interface DomAnimation {
  isAddClass: boolean;
  className: string;
}
interface LoginError {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
    /**
     * Icon Image
     */
    protected userLoginIdentifier: string = '/assets/icon/user-login-identifier.svg';
    protected closeImageUrl: string = '/assets/navbar/close.svg';
    protected loginStep: number = 1;
    protected username!: string;
    protected password!: string;
    protected error: LoginError = {
        username: '',
        password: '',
    };
    protected successMessage: string = '';
    protected successMessageSubscription$ = this._store.select(getSuccessMessage).subscribe(data => {
        if (data && data?.length > 0) {
            this.successMessage = data;
            this._messageService.cleanSuccess();
        }
    });
    protected errorMessage: string = '';
    protected errorMessageSubscription$ = this._store.select(getErrorMessage).subscribe(data => {
        if (data && data?.length > 0) {
            this.errorMessage = data;
            this._messageService.cleanError();
        }
    });

    public constructor(
        private _el: ElementRef,
        private _renderer: Renderer2,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _homeNavService: HomeNavService,
        private _loginService: LoginService,
        private _store: Store,
        private _messageService: MessageService,
        private _subscriptionService: SubscriptionService
    ) { 
        this.initNav();
    }

    public ngOnDestroy(): void {
        this._subscriptionService.delete(this.successMessageSubscription$, this.errorMessageSubscription$);
    }

  /**
   * Init navigation 
   */
  protected initNav(): void {
      this._activatedRoute.params.subscribe((_) => {
          this._homeNavService.dispatchActiveRouteName();
      });
  }

  /**
   * Back To Home And Close This Page, also
   * add smooth animation while closing the `modal`
   * @param route 
   */
  protected backToHome(route?: string[] | string): void {
      if (route === undefined || route.length === 0) return;
      /**
       * Get Container Element
       */
      const getContainerElement = this._el.nativeElement.querySelector('.channel__login_wrapper');
      /**
      * Add class animation to close the `modal` smoothly
      */
      this._renderer.addClass(getContainerElement, 'channel__login_disappear');
      /**
       * Redirect Back To Home
       */
      setTimeout(() => {
          this._router.navigate([...route]);
      }, 151);
  }

    /**
     * Login App
     */
    public login(): void {
        // Username
        if (this.loginStep === 1) {
            const usernameValidation = this._loginService.validateUsername(this.username);
            this.error.username = usernameValidation.username;
            if (usernameValidation.username.length > 0) {
                this.displayErrorAnimation();
                return;
            }
            this.animate('channel__login_username_container',
                { isAddClass: true, className: 'channel__login_username_next' }
            )
            setTimeout(() => {
                this.changeLoginStep(2);
            }, 250);
            return;
        } 
        // Password
        if (this.loginStep === 2) {
            const passwordValidation = this._loginService.validatePassword(this.password);
            this.error.password = passwordValidation.password;
            if (passwordValidation.password.length > 0) {
                this.displayErrorAnimation();
                return;
            }
        }
    }

    protected submitToLogin(): void {
        this._store.dispatch(loginStart({ email: this.username, password: this.password }));
    }

  /**
   * Back To Username Section
   */
  public backToUsernameSection(): void {
    this.password = '';
    this.error.password = '';
    this.animate('channel__login_password_container',
      { isAddClass: false, className: 'channel__login_password_next' },
      { isAddClass: true, className: 'channel__login_password_back' }
    )
    setTimeout(() => {
      this.changeLoginStep(1);
      this.animate('channel__login_username_container',
        { isAddClass: false, className: 'channel__login_username_next' },
        { isAddClass: true, className: 'channel__login_username_back' }
      )
    }, 250);
  }

  /**
   * Change login step functionality
   * @param step 
   */
  public changeLoginStep(step: number = 1): void {
    this.loginStep = step;
  }

  /**
   * Animate some transition
   * @param elTarget 
   * @param domAnimation 
   */
  public animate(elTarget: string, ...domAnimation: DomAnimation[]): void {
    const getTargetElement = this._el.nativeElement.querySelector(`.${elTarget}`);
    for (let i = 0; i < domAnimation.length; i++) {
      const dom = domAnimation[i];
      if (dom.isAddClass) {
        this._renderer.addClass(getTargetElement, dom.className);
        continue;
      }
      this._renderer.removeClass(getTargetElement, dom.className);
    }
  }

  /**
   * Display error animation
   */
  public displayErrorAnimation(): void {
    const getLoginElement = this._el.nativeElement.querySelector(".channel__login");
    this._renderer.addClass(getLoginElement, 'channel__invalid_animation');
    setTimeout(() => {
      this._renderer.removeClass(getLoginElement, 'channel__invalid_animation');
    }, 251);
  }
}
