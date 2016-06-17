import {Component} from 'angular2/core';
import {MediaItemListComponent} from './media-item-list.component';
import {MediaItemFormComponent} from './media-item-form.component';
//Since AppComponent is the Entry point of the routes
//ROUTER_DIRECTIVES contains directives from the components in
//RouteConfig
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@RouteConfig([
    {
        path:'/:medium', component: MediaItemListComponent, name: 'List'
    },
    {
        path: '/add', component: MediaItemFormComponent, name: 'AddMediaItem'
    }
])
@Component({
    selector: 'media-tracker-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
}