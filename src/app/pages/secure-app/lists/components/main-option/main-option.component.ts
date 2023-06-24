import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteLists, updateMarkStatusLists } from '../../state/lists.actions';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
    selector: 'lists-main-option',
    templateUrl: './main-option.component.html',
    styleUrls: ['./main-option.component.scss']
})
export class MainOptionComponent  {
    @Input('listId') listId: number = 0;
    @Input('markStatus') markStatus: string = 'Standard';


    @Output() isClosed: EventEmitter<boolean> = new EventEmitter<boolean>(false);
    
    constructor(
        private _store: Store,
    ) { }

    clickOutsideOptions(e: Event): void {
        e.stopPropagation();
        if (!(e.target as HTMLElement).classList.contains('list_next_section_other')) {
            this.isClosed.emit(true);
        }
    }

    updateMarkStatusList(): void {
        this._store.dispatch(updateMarkStatusLists({
            listId: this.listId,
            markStatus: this.markStatus === 'Standard' ? 'Urgent' : 'Standard',
            prevMarkStatus: this.markStatus
        }));
    }

    deleteLists(): void {
        this._store.dispatch(deleteLists({ listId: this.listId }));
    }
}
