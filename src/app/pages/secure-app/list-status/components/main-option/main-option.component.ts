import { Component, EventEmitter, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { CreateListStatusComponent } from 'src/app/shared/modals/create-list-status/create-list-status.component';

@Component({
  selector: 'list-status-main-option',
  templateUrl: './main-option.component.html',
  styleUrls: ['./main-option.component.scss']
})
export class MainOptionComponent {
    @Output() isClosed: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    constructor(
        private _modalService: ModalService
    ) {}


    clickOutsideOperationsOptions(e: Event): void {
        e.stopPropagation();
        if (!(e.target as HTMLElement).classList.contains('list_next_section_other')) {
            this.isClosed.emit(true);
        }
    }

    createListStatus(): void {
        this._modalService.create({
            component: CreateListStatusComponent
        });
    }
}
