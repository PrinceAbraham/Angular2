import {Component} from 'angular2/core';
import {MediaItemComponent} from './media-item.component';
import {CategoryListPipe} from './category-list.pipe';
import {MediaItemService} from './media-item.service';

@Component({
    selector: 'media-item-list',
    directives: [MediaItemComponent],
    pipes: [CategoryListPipe],
    // providers: [MediaItemService], is not needed as it is already available in the component tree
    templateUrl: 'app/media-item-list.component.html',
    styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

    constructor(private mediaItemService: MediaItemService){}
    ngOnInit(){
        //this.mediaItems = this.mediaItemService.get()
        this.mediaItemService.get()
        //won't execute until there is a call to subscribe
        //which will be a successful return of the mediaItems
        //write an arrow function with mediaItems as the parameter
        .subscribe(mediaItems => {
            this.mediaItems = mediaItems;
        });
    }  
    onMediaItemDeleted(mediaItem) {
        this.mediaItemService.delete(mediaItem);
    }
    mediaItems;
}