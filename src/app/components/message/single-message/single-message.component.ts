import { Component, Input } from '@angular/core';

@Component({
  selector: 'single-message',
  templateUrl: './single-message.component.html',
  styleUrls: ['./single-message.component.scss']
})
export class SingleMessageComponent {
    @Input('message') message: string = 'Something Went Wrong!';
    @Input('isError') isError: boolean = true;
}
