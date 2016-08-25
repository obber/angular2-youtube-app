import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-entry',
  template: require('./listEntry.component.html')
})
export class ListEntry {
  @Input() video;
  @Input() onClick;
}
