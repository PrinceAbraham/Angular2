System.register(['angular2/core', './media-item.component', './category-list.pipe', './media-item.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, media_item_component_1, category_list_pipe_1, media_item_service_1, router_1;
    var MediaItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (media_item_component_1_1) {
                media_item_component_1 = media_item_component_1_1;
            },
            function (category_list_pipe_1_1) {
                category_list_pipe_1 = category_list_pipe_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MediaItemListComponent = (function () {
                function MediaItemListComponent(mediaItemService, routeParams) {
                    this.mediaItemService = mediaItemService;
                    this.routeParams = routeParams;
                    this.medium = '';
                    this.mediaItems = [];
                }
                MediaItemListComponent.prototype.ngOnInit = function () {
                    this.medium = this.routeParams.get('medium');
                    this.getMediaItems(this.medium);
                };
                MediaItemListComponent.prototype.onMediaItemDeleted = function (mediaItem) {
                    var _this = this;
                    this.mediaItemService.delete(mediaItem)
                        .subscribe(function () {
                        //refreshes the list after delete
                        _this.getMediaItems(_this.medium);
                    });
                };
                MediaItemListComponent.prototype.getMediaItems = function (medium) {
                    var _this = this;
                    this.medium = medium;
                    //this.mediaItems = this.mediaItemService.get()
                    this.mediaItemService.get(this.medium)
                        .subscribe(function (mediaItems) {
                        _this.mediaItems = mediaItems;
                    });
                };
                MediaItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'media-item-list',
                        directives: [media_item_component_1.MediaItemComponent, router_1.ROUTER_DIRECTIVES],
                        pipes: [category_list_pipe_1.CategoryListPipe],
                        // providers: [MediaItemService], is not needed as it is already available in the component tree
                        templateUrl: 'app/media-item-list.component.html',
                        styleUrls: ['app/media-item-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [media_item_service_1.MediaItemService, router_1.RouteParams])
                ], MediaItemListComponent);
                return MediaItemListComponent;
            }());
            exports_1("MediaItemListComponent", MediaItemListComponent);
        }
    }
});
//# sourceMappingURL=media-item-list.component.js.map