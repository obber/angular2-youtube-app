import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Navbar, Sidebar, BodyContent } from './ui';
import { Api } from './shared';

@Component({
  selector: 'app',
  template: require('./app.component.html'),
  directives: [
    Navbar,
    Sidebar,
    BodyContent
  ]
})

export class AppComponent {};
