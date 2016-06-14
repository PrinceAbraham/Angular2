import {Component} from 'angular2/core';

//Model Driven Form uses control and control group
import {ControlGroup, Control} from 'angular2/common';

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
            'name' : new Control(''),
            'category' : new Control(''),
            'year' : new Control('')
        });
    }

    onSubmit(mediaItem){
        console.log(mediaItem);
    }
}