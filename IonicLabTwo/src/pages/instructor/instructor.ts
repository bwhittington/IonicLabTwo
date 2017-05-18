import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InstructorService } from '../../components/instructors/shared/instructor.service';
import { InstructorModel } from '../../components/instructors/shared/instructor.model';

@IonicPage()
@Component({
    selector: 'instructor',
    templateUrl: 'instructor.html'
})

export class InstructorPage {

    public instructorModel: InstructorModel;
    public instructorService: InstructorService;
    public navCtrl: NavController;
    public navParams: NavParams;
    public id: number;

    constructor(navCtrl: NavController, navParams: NavParams, instructorService: InstructorService) {
        this.instructorService = instructorService;
        this.navParams = navParams;

        this.id = this.navParams.get('id');
        this.instructorModel = this.instructorService.getInstructor(this.id);
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Instructor');
    }
}