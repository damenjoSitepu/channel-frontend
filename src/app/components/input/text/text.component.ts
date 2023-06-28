import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ch-input-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
    @Output() value: EventEmitter<string> = new EventEmitter<string>();
    @Input('label') label: string = 'Label';
    @Input('for') for: string = 'channel__';

    recordValue(e: any): void {
        this.value.emit(e.target.value);
    }
}
