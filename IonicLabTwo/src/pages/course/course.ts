import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CourseService } from '../../components/courses/shared/course.service';
import { CourseModel } from '../../components/courses/shared/course.model';

@IonicPage()
@Component({
    selector: 'course',
    templateUrl: 'course.html'
})

export class CoursePage {

    public courseModel: CourseModel;
    public courseService: CourseService;
    public navCtrl: NavController;
    public navParams: NavParams;
    public id: number;

    constructor(navCtrl: NavController, navParams: NavParams, courseService: CourseService) {
        this.courseService = courseService;
        this.navParams = navParams;

        this.id = this.navParams.get('id');
        this.courseModel = this.courseService.getCourse(this.id);
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Course');
    }
}