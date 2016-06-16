//To use Http
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
//It handles letting Angular know that 
//this class it decorates needs to be part of the dependency injection plan.
@Injectable()
export class MediaItemService{

    //constructor
    constructor(private http: Http){}

    get(){
        //need to unwrap the HTTP response objects that the HTTP.get method sends back,
        //because we still want the service to return mediaItems, not an HTTP response object
        //that the component has to deal with.
        //mediaitems?medium= is the url
        return this.http.get('mediaitems?medium=')
        //and so map is used
        //The map method is expecting a function as its argument. This function will receive 
        //an argument that will be one of the HTTP response objects in the observable
        .map(response => {
            return response.json().mediaItems;
        });
    }
    add(mediaItem){
        this.mediaItems.push(mediaItem);
    }
    delete(mediaItem){
        var index = this.mediaItems.indexOf(mediaItem);
        if(index >=0){
            this.mediaItems.splice(index, 1);
        }
    }
    mediaItems = [
        {
            id: 1,
            name: "Firebug",
            medium: "Series",
            category: "Science Fiction",
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: "The Small Tall",
            medium: "Movies",
            category: "Comedy",
            year: 2015,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 3,
            name: "The Redemption",
            medium: "Movies",
            category: "Action",
            year: 2016,
            watchedOn: null,
            isFavorite: false
        }, {
            id: 4,
            name: "Hoopers",
            medium: "Series",
            category: "Drama",
            year: null,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 5,
            name: "Happy Joe: Cheery Road",
            medium: "Movies",
            category: "Action",
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        }
    ];
}