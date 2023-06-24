import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDetailService } from 'src/app/services/user-detail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    constructor(
        private _userDetail: UserDetailService
    ) {
        this._userDetail.get().subscribe(data => {

        });
    }   
}
