//To use Http
import {Http, URLSearchParams, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
//It handles letting Angular know that 
//this class it decorates needs to be part of the dependency injection plan.
@Injectable()
export class MediaItemService{

    //constructor
    constructor(private http: Http){}
    //medium is the search param here.
    get(medium){
        var searchParams = new URLSearchParams();
        //string and the value
        searchParams.append('medium', medium);
        //need to unwrap the HTTP response objects that the HTTP.get method sends back,
        //because we still want the service to return mediaItems, not an HTTP response object
        //that the component has to deal with.
        //mediaitems?medium= is the url
        //The request options support a search property which can be a string
        //or an instance of URLSearchParams
        // it automatically adds params ?mediaItem=(param)
        return this.http.get('mediaitems', {search: searchParams})
        //and so map is used
        //The map method is expecting a function as its argument. This function will receive 
        //an argument that will be one of the HTTP response objects in the observable
        .map(response => {
            return response.json().mediaItems;
        });
    }
    add(mediaItem){
        var header = new Headers({'Content-Type': 'application/json'});
        return this.http.post('mediaitems', JSON.stringify(mediaItem),
        {headers: header})
        .map(response =>{});
    }
    delete(mediaItem){
        //build the string with mediaitems/string and a variable replacement 
        //for the mediaitem.id property from the mediaitem passed in
        return this.http.delete(`mediaitems/${mediaItem.id}`)
        .map(response =>{});
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