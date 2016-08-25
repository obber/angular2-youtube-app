import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { NgRedux, select } from 'ng2-redux';
import { map } from 'lodash';
import 'rxjs/add/operator/toPromise';

import { Config } from './config';
import { Actions } from '../actions';

@Injectable()
export class Api {
  constructor(private http: Http) {}

  search(query) {
    return this.get(query);
  }

  private get(query) {
    const params = new URLSearchParams();
    params.set('key', Config.YOUTUBE_API_KEY);
    params.set('q', query);
    params.set('maxResults', '10');
    params.set('part', 'snippet');

    const processData = resp => (
      resp.items.map(item => (Object.assign({}, 
        { videoId: item.id.videoId },
        item.snippet)
      ))
    );

    // return new Promise((resolve, reject) => {
    //   const sample = {
    //     description: "BUMP OF CHICKEN「Hello,world! / コロニー」http://amzn.to/1cUREVd 2015.04.22 (wed) Release ＜収録曲＞ 01. Hello,world!（TVアニメ「血界戦線」オープニング・ ...",
    //     thumbnails: {
    //       default: {
    //         height: 90,
    //         width: 120,
    //         url: "https://i.ytimg.com/vi/rOU4YiuaxAM/default.jpg"
    //       }
    //     },
    //     title: "BUMP OF CHICKEN「Hello,world!",
    //     videoId: "rOU4YiuaxAM"
    //   };
    //   const result = new Array(10).fill(Object.assign({}, sample));
    //   resolve(result);
    // });

    return this.http.get('https://www.googleapis.com/youtube/v3/search', { search: params })
      .toPromise()
      .then(resp => resp.json())
      .catch(resp => resp.json())
      .then(processData)
  }
};
