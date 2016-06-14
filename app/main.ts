import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
//import MediaItemService here so that a single instance is used through the app
import {MediaItemService} from './media-item.service';
//provider
import {provide} from 'angular2/core';

var lookupList = {
    mediums: ['Movies', 'Series']
};

bootstrap(AppComponent, [
    MediaItemService,
    provide('LOOKUP_LIST',{useValue : lookupList})
    ]);