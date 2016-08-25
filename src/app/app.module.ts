import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgRedux } from 'ng2-redux';
import { rootReducer } from './reducers';

import { AppComponent } from './index';

// redux state interface
export interface IAppState {
  count?: number;
}

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [NgRedux],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.configureStore(rootReducer, {}, []);
  }
};
