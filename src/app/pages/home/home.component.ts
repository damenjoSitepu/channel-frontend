import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeNavService } from 'src/app/services/home-nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public homeHeroImageUrl: string = '/assets/home/home-hero.svg';

    public constructor(
        private _activatedRoute: ActivatedRoute,
        private _homeNavService: HomeNavService
    ) {
        this.initNav();
    }

    /**
     * Init navigation 
     */
    protected initNav(): void {
        this._activatedRoute.params.subscribe((_) => {
            this._homeNavService.dispatchActiveRouteName();
        });
    }
}
