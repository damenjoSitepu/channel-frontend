import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'list-status-main-option',
  templateUrl: './main-option.component.html',
  styleUrls: ['./main-option.component.scss']
})
export class MainOptionComponent {
    @Output() isClosed: EventEmitter<boolean> = new EventEmitter<boolean>(false);


    clickOutsideOperationsOptions(e: Event): void {
        e.stopPropagation();
        if (!(e.target as HTMLElement).classList.contains('list_next_section_other')) {
            this.isClosed.emit(true);
        }
    }

    createListStatus(): void {

    }
}
