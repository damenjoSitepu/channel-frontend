import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActiveNavService } from 'src/app/services/active-nav.service';
import { UserDetailService } from 'src/app/services/user-detail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(
        private _userDetail: UserDetailService,
        private _activeNavService: ActiveNavService
    ) {
        this._userDetail.get().subscribe(data => {

        });
    }   

    ngOnInit(): void {
        this._activeNavService.setMain('home');
    }
}
