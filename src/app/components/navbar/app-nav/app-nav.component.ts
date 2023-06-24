import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HOME_NAV_DESKTOP_MENUS } from 'src/app/const/links/home-nav-desktop-menus';
import { getActiveRouteName } from '../../state/home-nav/home-nav.selector';
import { logoutAuto } from 'src/app/pages/auth/login/state/login.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
    public logoutImageUrl: string = '/assets/navbar/sign-in.svg';
    public registrationImageUrl: string = '/assets/navbar/registration.svg';
    public menuImageUrl: string = '/assets/navbar/menu.svg';

    /**
     *  Define home nav desktop menus
     */
    protected homeNavDesktopMenus: any = HOME_NAV_DESKTOP_MENUS;

    /**
     * Define Active route name property
     */
    protected activeRouteName !: Observable<string>;

    /**
     * Controlling sidebar to be showed or otherwise 
     */
    protected showHomeSidebarNav: boolean = false;

    public constructor(
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
     * Define Home sidebar will showed or not
     */
    protected displaySidebar(): void {
        this.showHomeSidebarNav = !this.showHomeSidebarNav;
    }

    /**
     * Close the home sidebar when user click `x` 
     * button on the sidebar components
     * @param event 
     */
    protected hideHomeSidebarNav(event: boolean): void {
        this.showHomeSidebarNav = event;
    }

    protected onLogout(e: MouseEvent): void {
        e.preventDefault();
        this._store.dispatch(logoutAuto());
    }
}
