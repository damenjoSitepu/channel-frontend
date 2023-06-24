import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[channelPlaceholder]',
    standalone: true
})
export class ChannelPlaceholderDirective {
    constructor(public vCR: ViewContainerRef) {}
}