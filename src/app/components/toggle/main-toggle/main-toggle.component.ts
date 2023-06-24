import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-toggle',
  templateUrl: './main-toggle.component.html',
  styleUrls: ['./main-toggle.component.scss']
})
export class MainToggleComponent {
    @Output() output: EventEmitter<boolean> = new EventEmitter<boolean>(false);
    returnValue: boolean = false;

    public changeValue() {
        this.output.emit(this.returnValue);
    }
}
