import {Component} from 'angular2/core';

//Model Driven Form uses control and control group
//Built-in Validators
import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    //decalare a form
    form;

    //call initialize during the lifecycle
    ngOnInit(){
        this.form = new ControlGroup({
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
        return {'year': true};
    }

    onSubmit(mediaItem){
        console.log(mediaItem);
    }
}