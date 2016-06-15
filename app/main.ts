import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
//import MediaItemService here so that a single instance is used through the app
import {MediaItemService} from './media-item.service';
//provider
import {provide} from 'angular2/core';
import {LOOKUP_LISTS, lookupLists} from './providers';
import {HTTP_PROVIDERS, XHRBackend} from 'angular2/http';
import {MockXHRBackend} from './mock-xhr-backend';


bootstrap(AppComponent, [
    MediaItemService,
    provide(LOOKUP_LISTS, { useValue: lookupLists }),
    HTTP_PROVIDERS,
    provide(XHRBackend, {useClass: MockXHRBackend})
]);