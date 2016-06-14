//Use Inject from angular2/core
import {Component, Inject} from 'angular2/core';

//Model Driven Form uses control and control group
//Built-in Validators
//Create FormBuilder class
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';

//Inject Service
import {MediaItemService} from './media-item.service';

@Component({
    selector: 'media-item-form',
    // providers: [MediaItemService], is not needed as it is already available in the component tree
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    //decalare a form
    form;

    // constructor (typeScript) for formBuilder and mediaItemService
    constructor(private formBuilder: FormBuilder, 
    private mediaItemService: MediaItemService,
    @Inject('LOOKUP_LIST') public lookupList){

    }

    //call initialize during the lifecycle
    ngOnInit(){
        //change new ControlGroup to this.formBuilder.group
        this.form = this.formBuilder.group({
            //Give properties to the new ControlGroup
            'medium': new Control('Movies'), //Setting default to Movies
            //Validators can be used like this
            // 'name' : new Control('', Validators.pattern('[\\w\\-\\s\\/]+')),
            // or for multiple validators
             'name' : new Control('', Validators.compose([
                 Validators.required,
                 Validators.pattern('[\\w\\-\\s\\/]+')
                 ])),
            'category' : new Control(''),
            //control calls the validator async
            'year' : new Control('', this.yearValidator)
        });
    }

    //Custom Validator YearValidator
    yearValidator(control){
        if(control.value.trim().length === 0){
            return null;
        }
        var year = parseInt(control.value);
        var minYear = 1900;
        var maxYear = 2100;
        if(year >= minYear && year <= maxYear){
            return null;
        }
        //You can return anything.
        //Anything but null will invalidate the field and add the property to the errors
        return {'year': {'min' : minYear,'max' :maxYear}};
    }

    onSubmit(mediaItem){
        console.log(mediaItem);
        this.mediaItemService.add(mediaItem);
    }
}