import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'ch-input-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
    @Input('label') label: string = 'Label';
    @Output() value: EventEmitter<string> = new EventEmitter<string>();
    protected randomNumber = this.generateRandomNumber();
    protected randomLabelNumber = this.generateRandomNumber();

    constructor(
        private _el: ElementRef,
        private _renderer: Renderer2
    ) { }

    generateRandomNumber(): number {
        const min = Math.ceil(1);
        const max = Math.floor(10000000);
        return Math.floor(Math.random() * (max - min) + min);
    }

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

    recordValue(e: any): void {
        this.value.emit(e.target.value);
    }
}
