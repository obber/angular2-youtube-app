import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { NgRedux, select } from 'ng2-redux';
import { map } from 'lodash';
import 'rxjs/add/operator/map';

import { Config } from './config';
import { Actions } from '../actions';

@Injectable()
export class Api {
  constructor(private http: Http) {}

  search(query) {
    const params = new URLSearchParams();
    params.set('key', Config.YOUTUBE_API_KEY);
    params.set('q', query);
    params.set('maxResults', '10');
    params.set('part', 'snippet');

    return this.http.get('https://www.googleapis.com/youtube/v3/search', { search: params })
      .map(resp => this.processData(resp.json()))
  }

  private processData(resp) {
    return resp.items.map(item => (Object.assign({}, 
      { videoId: item.id.videoId },
      item.snippet)
    ))
  }
};
