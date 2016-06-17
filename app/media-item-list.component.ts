import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';
import {CategoryListPipe} from './category-list.pipe';
import {MediaItemService} from './media-item.service';
//RouteParams
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'media-item-list',
    directives: [MediaItemComponent, ROUTER_DIRECTIVES],
    pipes: [CategoryListPipe],
    // providers: [MediaItemService], is not needed as it is already available in the component tree
    templateUrl: 'app/media-item-list.component.html',
    styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

    medium='';
    mediaItems=[];
    constructor(private mediaItemService: MediaItemService, private routeParams: RouteParams){}
    ngOnInit(){
        this.medium = this.routeParams.get('medium');
        this.getMediaItems(this.medium);
    }  
    onMediaItemDeleted(mediaItem) {
        this.mediaItemService.delete(mediaItem)
        .subscribe(() => {
            //refreshes the list after delete
            this.getMediaItems(this.medium);
        });
    }

    getMediaItems(medium){
        this.medium = medium;
        //this.mediaItems = this.mediaItemService.get()
        this.mediaItemService.get(this.medium)
        //won't execute until there is a call to subscribe
        //which will be a successful return of the mediaItems
        //write an arrow function with mediaItems as the parameter
        .subscribe(mediaItems => {
            this.mediaItems = mediaItems;
        });   
    }

}