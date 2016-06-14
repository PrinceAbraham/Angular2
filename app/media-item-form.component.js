System.register(['angular2/core', 'angular2/common', './media-item.service'], function(exports_1, context_1) {
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
    var core_1, common_1, media_item_service_1;
    var MediaItemFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            }],
        execute: function() {
            MediaItemFormComponent = (function () {
                // constructor (typeScript) for formBuilder and mediaItemService
                function MediaItemFormComponent(formBuilder, mediaItemService) {
                    this.formBuilder = formBuilder;
                    this.mediaItemService = mediaItemService;
                }
                //call initialize during the lifecycle
                MediaItemFormComponent.prototype.ngOnInit = function () {
                    //change new ControlGroup to this.formBuilder.group
                    this.form = this.formBuilder.group({
                        //Give properties to the new ControlGroup
                        'medium': new common_1.Control('Movies'),
                        //Validators can be used like this
                        // 'name' : new Control('', Validators.pattern('[\\w\\-\\s\\/]+')),
                        // or for multiple validators
                        'name': new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required,
                            common_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        'category': new common_1.Control(''),
                        //control calls the validator async
                        'year': new common_1.Control('', this.yearValidator)
                    });
                };
                //Custom Validator YearValidator
                MediaItemFormComponent.prototype.yearValidator = function (control) {
                    if (control.value.trim().length === 0) {
                        return null;
                    }
                    var year = parseInt(control.value);
                    var minYear = 1900;
                    var maxYear = 2100;
                    if (year >= minYear && year <= maxYear) {
                        return null;
                    }
                    //You can return anything.
                    //Anything but null will invalidate the field and add the property to the errors
                    return { 'year': { 'min': minYear, 'max': maxYear } };
                };
                MediaItemFormComponent.prototype.onSubmit = function (mediaItem) {
                    console.log(mediaItem);
                    this.mediaItemService.add(mediaItem);
                };
                MediaItemFormComponent = __decorate([
                    core_1.Component({
                        selector: 'media-item-form',
                        // providers: [MediaItemService], is not needed as it is already available in the component tree
                        templateUrl: 'app/media-item-form.component.html',
                        styleUrls: ['app/media-item-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, media_item_service_1.MediaItemService])
                ], MediaItemFormComponent);
                return MediaItemFormComponent;
            }());
            exports_1("MediaItemFormComponent", MediaItemFormComponent);
        }
    }
});
//# sourceMappingURL=media-item-form.component.js.map