import { Component, Input } from '@angular/core';

@Component({
  selector: 'i-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
    @Input('size') size: number = 20;
}
