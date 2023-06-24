import { Component, Input } from '@angular/core';

@Component({
  selector: 'i-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    @Input('size') size: number = 20;
}
