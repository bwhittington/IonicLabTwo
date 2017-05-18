import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

import { CourseService } from '../../components/courses/shared/course.service';
import { CourseModel } from '../../components/courses/shared/course.model';

@IonicPage()
@Component({
    selector: 'course',
    templateUrl: 'course.html'
})

export class CoursePage {

    private courseModel: CourseModel;
    private courseService: CourseService;
    private navCtrl: NavController;
    private navParams: NavParams;
    private id: number;
    private fileOpener: FileOpener;
    private filePath: FilePath;

    constructor(navCtrl: NavController, navParams: NavParams, courseService: CourseService, filePath: FilePath, fileOpener: FileOpener ) {
        this.courseService = courseService;
        this.navParams = navParams;
        this.filePath = filePath;
        this.fileOpener = fileOpener;

        this.id = this.navParams.get('id');
        this.courseModel = this.courseService.getCourse(this.id);
    }

    public ionViewDidLoad(): void {
        console.log('ionViewDidLoad Course');
    }

    public openDocument(filePathString: string): void {
        this.filePath.resolveNativePath(filePathString)
            .then(path => this.fileOpener.open(path, 'application/pdf')
                .then(() => console.log('File is opened'))
                .catch(e => console.log('Error openening file', e)))
            .catch(err => console.log(err));
    }
}