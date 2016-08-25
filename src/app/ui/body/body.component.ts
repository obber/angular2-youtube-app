import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import 'rxjs/add/operator/last';

@Component({
  selector: 'body-content',
  template: require('./body.component.html')
})
export class BodyContent {
  @select('currentVideo') currentVideo$: Observable<number>
  constructor(sanitizer: DomSanitizationService) {
    const videoUrlSource = this.currentVideo$;

    const setVideo = function(x: string) {
      this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + x);
      if (x !== 'initial') {
        this.selected = true;
      }
    };

    const subscription = videoUrlSource.subscribe(
      setVideo.bind(this),
      err => {
        console.log('Error: %s', err);
      });
  }

  public videoUrl: SafeResourceUrl;
  public selected: boolean;
}
