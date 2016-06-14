import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
//import MediaItemService here so that a single instance is used through the app
import {MediaItemService} from './media-item.service';

bootstrap(AppComponent, [MediaItemService]);