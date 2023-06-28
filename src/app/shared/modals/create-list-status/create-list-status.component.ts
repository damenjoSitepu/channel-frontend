import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-list-status',
  standalone: true,
  imports: [CommonModule, DragDropModule, ComponentsModule, NgClickOutsideDirective],
  templateUrl: './create-list-status.component.html',
  styleUrls: ['./create-list-status.component.scss']
})
export class CreateListStatusComponent {
    protected title: string = '';
    protected description: string = '';

    constructor(
        private _modalService: ModalService
    ) { }
    
    clickOutsideOperationsOptions(e: Event): void {
        e.stopPropagation();
        if (!(e.target as HTMLElement).classList.contains('channel__list_status_main_options_create')) {
            this._modalService.dismiss();
        }
    }

    submit(): void {
        this._modalService.dismiss();
    }
}
