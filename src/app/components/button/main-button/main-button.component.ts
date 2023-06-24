import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent {
    /**
     * Define Button Name
     */
    @Input('buttonName') buttonName: string = 'Channel';

    /**
     * Define Width Of Button
     */
    @Input('buttonWidth') buttonWidth: number = 0;
}
