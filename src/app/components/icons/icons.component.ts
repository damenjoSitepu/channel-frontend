import { Component, Input } from '@angular/core';
import { ICONS } from 'src/app/const/utils/icons';

@Component({
  selector: 'channel-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
    protected iconsType: any = ICONS;
    @Input('type') iconType: string = '';
    @Input('size') size: number = 20;
    @Input('color') color: string = 'fff';
}
