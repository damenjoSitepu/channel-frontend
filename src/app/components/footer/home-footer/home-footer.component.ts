import { Component } from '@angular/core';
import { HOME_FOOTER_MENUS } from 'src/app/const/links/home-footer-menus';
import { HomeFooter } from 'src/app/interfaces/HomeFooter.interface';

@Component({
  selector: 'home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent {
    /**
     * Define list of home menu footer
     */
    protected homeFooterMenus: HomeFooter[] = HOME_FOOTER_MENUS;

    /**
     * Define year of copyright
     */
    protected copyright: number = new Date().getFullYear();

    /**
     * Define last update from this app
     */
    protected lastUpdate: string = this.formatLastUpdate();

    /**
     * Format last update for footer components
     * @returns string
     */
    protected formatLastUpdate(): string {
        const originalDate = new Date();
        return originalDate.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
}
