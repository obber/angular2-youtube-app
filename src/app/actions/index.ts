import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { bindActionCreators } from 'redux';

import { IAppState } from '../app.module';

import * as actionCreators from './actionCreators';

@Injectable()
export class Actions {
  constructor(private ngRedux: NgRedux<IAppState>) {}

  newQuery(text) {
    this.ngRedux.dispatch(actionCreators.newQuery(text));
  }

  newResults(results) {
    this.ngRedux.dispatch(actionCreators.newResults(results));
  }

  selectVideo(videoId) {
    this.ngRedux.dispatch(actionCreators.selectVideo(videoId));
  }
}
