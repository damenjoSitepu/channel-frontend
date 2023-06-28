import { Component, ElementRef, Renderer2 } from '@angular/core';
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
    
    constructor(
        private _el: ElementRef,
        private _renderer: Renderer2,
        private _modalService: ModalService
    ) {}

    resizeTextArea(id: string): void {
        const el = this._el.nativeElement.querySelector("#" + id);
        this._renderer.setStyle(el, 'height', 'auto');
        this._renderer.setStyle(el, 'height', el.scrollHeight + "px");
    }

    openLabel(labelId: string): void {
        const el = this._el.nativeElement.querySelector("#" + labelId);
        this._renderer.setStyle(el, 'transition', '.1s linear');
        this._renderer.setStyle(el, 'top', '-11px');
        this._renderer.setStyle(el, 'fontSize', '12px');
        this._renderer.setStyle(el, 'color', '#3ac6e8');
    }

    closeLabel(inputId: string, labelId: string): void {
        const el = this._el.nativeElement.querySelector("#" + inputId);
        const labelIds = this._el.nativeElement.querySelector("#" + labelId);
        if (el.value?.length === 0) {
            this._renderer.setStyle(labelIds, 'transition', '.1s linear');
            this._renderer.setStyle(labelIds, 'top', '11px');
            this._renderer.setStyle(labelIds, 'fontSize', '13px');
            this._renderer.setStyle(labelIds, 'color', '#fff');
            el.blur();
        }
    }

    persistLabel(id: string, labelId: string): void {
        const el = this._el.nativeElement.querySelector("#" + id);
        const labelEl = this._el.nativeElement.querySelector("#" + labelId);
        if (el.value?.length > 0) {
            this._renderer.setStyle(labelEl, 'transition', '.1s linear');
            this._renderer.setStyle(labelEl, 'top', '-11px');
            this._renderer.setStyle(labelEl, 'fontSize', '12px');
            this._renderer.setStyle(labelEl, 'color', '#3ac6e8');
            return;
        }
        this._renderer.setStyle(labelEl, 'transition', '.1s linear');
        this._renderer.setStyle(labelEl, 'top', '11px');
        this._renderer.setStyle(labelEl, 'fontSize', '13px');
        this._renderer.setStyle(labelEl, 'color', '#fff');
        el.blur();
    }

    clickOutsideOperationsOptions(e: Event): void {
        e.stopPropagation();
        if (!(e.target as HTMLElement).classList.contains('channel__list_status_main_options_create')) {
            this._modalService.dismiss();
        }
    }

    submit(): void {
        console.log(this.title);
        return;
        this._modalService.dismiss();
    }
}
