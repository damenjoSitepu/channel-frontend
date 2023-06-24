import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getActiveRouteName } from 'src/app/components/state/home-nav/home-nav.selector';
import { HOME_NAV_DESKTOP_MENUS } from 'src/app/const/links/home-nav-desktop-menus';

@Component({
    selector: 'home-sidebar-nav',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    templateUrl: './home-sidebar-nav.component.html',
    styleUrls: ['./home-sidebar-nav.component.scss']
})
export class HomeSidebarNavComponent {
    /**
     * Define image resources for home sidebar nav section app
     */
    protected logoutImageUrl: string = '/assets/navbar/sign-in.svg';
    protected registrationImageUrl: string = '/assets/navbar/registration.svg';
    protected closeImageUrl: string = '/assets/navbar/close.svg';

    /**
     * Define Active route name property
     */
    protected activeRouteName !: Observable<string>;

    /**
     *  Define home nav desktop menus
     */
    protected homeNavDesktopMenus: any = HOME_NAV_DESKTOP_MENUS;

    /**
     * Controlling sidebar to be showed or otherwise
     */
    @Input('showHomeSidebarNav') showHomeSidebarNav: boolean = false;

    /**
     * Send value to the parent if sidebar was closed
     */
    @Output() hideHomeSidebarNav: EventEmitter<boolean> = new EventEmitter<boolean>(); 

    public constructor(
        private _el: ElementRef,
        private _renderer: Renderer2,
        private _router: Router,
        private _store: Store
    ) { 
        this.getActiveRouteName();
    }

    /**
     * Get Active Route By Selector
     */
    private getActiveRouteName(): void {
        this.activeRouteName = this._store.select(getActiveRouteName);
    }

    /**
     * Close sidebar when user click the `x` button
     */
    protected closeSidebar(withRoute?: string[] | string): void {
        /**
         * If route is not undefined, we should redirect 
         * to certain route with closing 
         * sidebar animation
         */
        if (withRoute !== undefined) {
            this._router.navigate([...withRoute]);
        }
        /**
         * Get sidebar element
         */
        const getSidebarElement = this._el.nativeElement.querySelector('.channel__home_sidebar_nav_container');
        /**
         * Add class animation to close the sidebar smoothly
         */
        this._renderer.addClass(getSidebarElement, 'channel__home_sidebar_nav_end_animation');
        setTimeout(() => {
            this.hideHomeSidebarNav.emit(false);
        }, 151);
    }
}
