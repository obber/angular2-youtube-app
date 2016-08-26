import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions } from '../../actions';

import { Api } from '../../shared';

@Component({
  selector: 'search',
  template: require('./search.component.html'),
  providers: [
    Api,
    Actions
  ]
})

export class Search {
  constructor(
    private api: Api,
    private actions: Actions) {}

  searchModel;

  onSubmit() {
    this.actions.newQuery(this.searchModel);

    this.api.search(this.searchModel)
      .subscribe(resp => {
        this.actions.newResults(resp);
      }, resp => {
        console.error('resp = ', resp);
      });
  }
}
