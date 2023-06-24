import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeNavService } from 'src/app/services/home-nav.service';

@Component({
  selector: 'app-global-not-found',
  templateUrl: './global-not-found.component.html',
  styleUrls: ['./global-not-found.component.scss']
})
export class GlobalNotFoundComponent {
  protected notFoundImage: string = '/assets/not-found/404.svg';

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
