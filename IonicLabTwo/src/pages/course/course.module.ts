import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CoursePage } from './course';
import { CourseService } from '../../components/courses/shared/course.service';

@NgModule({
    declarations: [ CoursePage ],
    imports: [ IonicPageModule.forChild(CoursePage) ],
    exports: [ CoursePage ],
    providers: [ CourseService ]
})

export class CoursePageModule { }