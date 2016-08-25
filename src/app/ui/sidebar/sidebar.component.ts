import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { ListEntry } from './listEntry.component';
import { Search } from './search.component';
import { Actions } from '../../actions';

@Component({
  selector: 'side-bar',
  providers: [
    Actions
  ],
  directives: [
    Search,
    ListEntry
  ],
  template: require('./sidebar.component.html')
})

export class Sidebar {
  @select('queryResults') queryResults$: Observable<number>;
  constructor(private actions: Actions) {}

  onClick = videoId => {
    this.actions.selectVideo(videoId);
  }
}
