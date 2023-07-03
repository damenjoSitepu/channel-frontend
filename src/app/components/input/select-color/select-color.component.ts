import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ch-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.scss']
})
export class SelectColorComponent {
    @Input('label') label: string = 'Label';
    @Output() value: EventEmitter<string> = new EventEmitter<string>();
}
