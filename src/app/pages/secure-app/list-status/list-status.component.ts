import { Component, OnInit } from '@angular/core';
import { ActiveNavService } from 'src/app/services/active-nav.service';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.scss']
})
export class ListStatusComponent implements OnInit {
    constructor(
        private _activeNavService: ActiveNavService
    ) { }
    
    ngOnInit(): void {
        this._activeNavService.setMain('manage-list-status');
    }
}
