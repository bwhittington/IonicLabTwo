import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { InstructorPage } from './instructor';
import { InstructorService } from '../../components/instructors/shared/instructor.service';

@NgModule({
    declarations: [ InstructorPage ],
    imports: [ IonicPageModule.forChild(InstructorPage) ],
    exports: [ InstructorPage ],
    providers: [ InstructorService ]
})

export class InstructorPageModule { }