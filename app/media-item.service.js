System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var MediaItemService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            //It handles letting Angular know that 
            //this class it decorates needs to be part of the dependency injection plan.
            MediaItemService = (function () {
                //constructor
                function MediaItemService(http) {
                    this.http = http;
                    this.mediaItems = [
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
                //medium is the search param here.
                MediaItemService.prototype.get = function (medium) {
                    var searchParams = new http_1.URLSearchParams();
                    //string and the value
                    searchParams.append('medium', medium);
                    //need to unwrap the HTTP response objects that the HTTP.get method sends back,
                    //because we still want the service to return mediaItems, not an HTTP response object
                    //that the component has to deal with.
                    //mediaitems?medium= is the url
                    //The request options support a search property which can be a string
                    //or an instance of URLSearchParams
                    // it automatically adds params ?mediaItem=(param)
                    return this.http.get('mediaitems', { search: searchParams })
                        .map(function (response) {
                        return response.json().mediaItems;
                    });
                };
                MediaItemService.prototype.add = function (mediaItem) {
                    var header = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('mediaitems', JSON.stringify(mediaItem), { headers: header })
                        .map(function (response) { });
                };
                MediaItemService.prototype.delete = function (mediaItem) {
                    //build the string with mediaitems/string and a variable replacement 
                    //for the mediaitem.id property from the mediaitem passed in
                    return this.http.delete("mediaitems/" + mediaItem.id)
                        .map(function (response) { });
                };
                MediaItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MediaItemService);
                return MediaItemService;
            }());
            exports_1("MediaItemService", MediaItemService);
        }
    }
});
//# sourceMappingURL=media-item.service.js.map